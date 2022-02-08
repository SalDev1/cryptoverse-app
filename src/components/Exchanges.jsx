import React from 'react';
import millify from "millify";
import {Row , Col , Collapse , Typography, Avatar} from "antd";
import { useGetCryptoExchangesQuery } from '../services/cryptoApi';

const Exchanges = () => {
  const {data , isFetching} = useGetCryptoExchangesQuery();
  const coinExchanges = data?.data?.exchanges;

  console.log(coinExchanges);

  const {Panel} = Collapse;
  const { Text } = Typography;

  return (
  <>  
    <Row>
       <Col span ={6}><p>Exchanges</p></Col>
       <Col span ={6}><p>24hr Volume</p></Col>
       <Col span ={6}><p>Markets</p></Col>
       <Col span ={6}><p>BTC Price</p></Col>
    </Row>

    
    <Row>
        {coinExchanges?.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange?.uuid}
                showArrow={false}
                header={(
                  <Row style={{width : "100%"}}>
                    <Col span ={6}>
                      <Text><strong>{exchange?.rank}</strong></Text>
                      <Avatar className = "exchange-image" src = {exchange?.iconUrl}/>
                      <Text><strong>{exchange?.name}</strong></Text>
                    </Col>
                    <Col span={6}>{exchange ? millify(exchange['24hVolume']) : millify("0")}</Col>
                    <Col span={6}>{exchange?.numberOfMarkets}</Col>
                    <Col span ={6}>{millify(exchange?.price)}</Col>
                  </Row>
                )}
              >
                <a href = {`${exchange?.coinrankingUrl}`} >
                  {exchange?.coinrankingUrl}
                </a>
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
  </>
 );
};

export default Exchanges;
