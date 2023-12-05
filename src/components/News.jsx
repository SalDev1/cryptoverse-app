import React , {useState} from 'react';
import {Select ,Typography , Row , Col , Avatar , Card} from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

const {Text , Title}= Typography;
const {Option} = Select;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');

  console.log(newsCategory);
  const res = useGetCryptoNewsQuery(newsCategory);
  const { data } = useGetCryptosQuery(100);

  const cryptoNews = res?.data?.articles;

  console.log(res);
  console.log(cryptoNews);

  if(res?.isLoading) return 'Loading...';

  // console.log(cryptoNews.value);
  const demoImage = "https://st1.bgr.in/wp-content/uploads/2022/02/Infinix-Zero-5G.jpg";
  return (
    <Row gutter = {[24, 24]}>
      {!simplified && (
        <Col span = {24}>
          <Select 
             showSearch
             className = "select-news"
             placeholder = "Select a Crypto"
             optionFilterProp='children'
             onChange={(value) => setNewsCategory(value)}
             filterOption = {(input , option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >

           <Option value = "CryptoCurrency">CryptoCurrency</Option>
           {data?.data?.coins?.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
           </Select>
        </Col>
      )}
       {cryptoNews?.map((news,i) => (
         <Col xs = {24} sm = {12} lg ={8} key = {i}>
            <Card hoverable className = "news-card"  style = {{ borderRadius : 22}} >  
              <a href = {news?.url} target = "_blank" rel = "noreferrer">
                 <div className='news-image-container'>
                     <Title className = "news-title" level={4}>{news?.title}</Title>
                 </div>
                 <div className = "provider-container">
                   <div>
                     <Text className = "provider-name">{news.publisher.name}</Text>
                   </div>
                   <Text> {moment(news.published_date).startOf('ss').fromNow()}</Text>
                 </div>
              </a>
            </Card>
         </Col>
       ))}
    </Row>
  );
};

export default News;
