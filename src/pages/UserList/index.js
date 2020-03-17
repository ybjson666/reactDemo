import React,{ Component }from 'react';
import { Button,Input,Row,Col,DatePicker,ConfigProvider,Table } from 'antd';
import './userList.less';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import moment from 'moment';

const { RangePicker } = DatePicker;

class Home extends Component{
    searchData={
        start_time:"",
        end_time:"",
        name:""
    }
    componentDidMount() {
        
    }
    onChange=(value, dateString)=> {
        // if(value){
        //     let start_time = moment(value[0]).format('YYYY-MM-DD HH:mm:ss'); 
        //     let end_time = moment(value[1]).format('YYYY-MM-DD HH:mm:ss');
        // }
        
    }
      
    onOk=(value)=> {
        // let start_time = moment(value[0]).format('YYYY-MM-DD'); 
        // let end_time = moment(value[1]).format('YYYY-MM-DD');
        if(value[1]){
            let start_time = value[0]._d.getTime(); 
            let end_time = value[1]._d.getTime();
            this.searchData.start_time=start_time;
            this.searchData.end_time=end_time;
            console.log(this.searchData)
        }
        
    }


    render(){

        const dataSource = [
            {
              index: '1',
              username: '胡彦斌',
              name: '胡一刀',
              userType: '建档立卡贫困户',
              addr:'理县A乡镇三沟村三组',
              addTime:'2019-09-20'
            },
            {
                index: '2',
                username: '胡彦斌',
                name: '胡一刀',
                userType: '建档立卡贫困户',
                addr:'理县A乡镇三沟村三组',
                addTime:'2019-09-20'
            },
            {
                index: '3',
                username: '胡彦斌',
                name: '胡一刀',
                userType: '建档立卡贫困户',
                addr:'理县A乡镇三沟村三组',
                addTime:'2019-09-20'
            },
            {
                index: '4',
                username: '胡彦斌',
                name: '胡一刀',
                userType: '建档立卡贫困户',
                addr:'理县A乡镇三沟村三组',
                addTime:'2019-09-20'
            }
          ];
          
          const columns = [
            {
                title: '序号',
                dataIndex: 'index',
                key: 'index',
            },
            {
                title: '提交人',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: '户主姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '农户类型',
                dataIndex: 'userType',
                key: 'userType',
            },
            {
                title: '家庭住址',
                dataIndex: 'addr',
                key: 'addr',
            },
            {
                title: '提交时间',
                dataIndex: 'addTime',
                key: 'addTime',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                render:(text,record)=>(
                    <span className="info-btn">详情</span>
                )
            },
          ];

        return (
            <div className="home-container">
                <p className="title">联户联勤</p>
                <div className="select-block">
                    <Col span={12}>
                        <Row>
                            <Col md={14} lg={10}>
                                <ConfigProvider locale={zh_CN}>
                                    <RangePicker
                                        format="YYYY-MM-DD"
                                        showTime={{defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')] }}
                                        onChange={this.onChange}
                                        onOk={this.onOk}
                                        placeholder={['提交时间(起)','提交时间(止)']}
                                        style={{width:'100%'}}
                                        
                                    />
                                </ConfigProvider>
                            </Col>
                            <Col span={6} style={{margin:'0 10px'}}>
                                <Input placeholder="请输入户主姓名"/>
                            </Col>
                            <Col>
                                <Button type="primary">查询</Button>
                            </Col>
                        </Row>
                    </Col>
                </div>
                <div className="table-block">
                    <Table dataSource={dataSource} columns={columns} rowKey='index'/>
                </div>
            </div> 
        )
    }
}
 export default Home;