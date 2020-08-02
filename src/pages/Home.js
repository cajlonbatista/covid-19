import React, { Component } from "react";
import "./Home.css";
import covid from "../covid.svg";
import { SearchOutlined } from '@ant-design/icons';
import { Select, Button, message, Spin, Descriptions } from 'antd';
import axios from "axios";
const { Option } = Select;
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            uf: "",
            loading: false,
            data: {},
            request: false,
        }
    }
    covid = () => {
        if (this.state.uf == "") {
            message.error("Selecione um estado !")
        } else {
            this.setState({
                loading: true
            })
            axios.get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${this.state.uf}`)
                .then(res => {
                    this.setState({
                        loading: false,
                        data: res.data,
                        request: true,
                    })
                })
        }
    }
    handleUF = (e) => {
        this.setState({
            uf: e
        })
    }

    render() {
        if (this.state.request == false) {
            return (
                <Spin size="large" spinning={this.state.loading}>
                    <div className="home">
                        <div className="logo">
                            <img src={covid} alt="" />
                            <h3>COVID-19 no Brasil</h3>
                        </div>
                        <div className="select">
                            <Select
                                onChange={this.handleUF}
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Selecione um estado"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="sp">SP</Option>
                                <Option value="ce">CE</Option>
                                <Option value="ba">BA</Option>
                                <Option value="rj">RJ</Option>
                                <Option value="pa">PA</Option>
                                <Option value="mg">MG</Option>
                                <Option value="ma">MA</Option>
                                <Option value="df">DF</Option>
                                <Option value="am">AM</Option>
                                <Option value="pe">PE</Option>
                                <Option value="sc">SC</Option>
                                <Option value="es">ES</Option>
                                <Option value="pb">PB</Option>
                                <Option value="pr">PR</Option>
                                <Option value="rs">RS</Option>
                                <Option value="go">GO</Option>
                                <Option value="al">AL</Option>
                                <Option value="se">SE</Option>
                                <Option value="mt">MT</Option>
                                <Option value="pi">PI</Option>
                                <Option value="rn">RN</Option>
                                <Option value="ro">RO</Option>
                                <Option value="ap">AP</Option>
                                <Option value="rr">RR</Option>
                                <Option value="ms">MS</Option>
                                <Option value="to">TO</Option>
                                <Option value="ac">AC</Option>
                            </Select>
                            <Button className="search" onClick={this.covid} type="primary" shape="circle" icon={<SearchOutlined />} />
                        </div>
                    </div>
                </Spin>
            )
        } else {
            return (
                <Spin size="large" spinning={this.state.loading}>
                    <div className="home">
                        <div className="logo">
                            <img src={covid} alt="" />
                            <h3>COVID-19 no Brasil</h3>
                        </div>
                        <div className="select">
                            <Select
                                onChange={this.handleUF}
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Selecione um estado"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="sp">SP</Option>
                                <Option value="ce">CE</Option>
                                <Option value="ba">BA</Option>
                                <Option value="rj">RJ</Option>
                                <Option value="pa">PA</Option>
                                <Option value="mg">MG</Option>
                                <Option value="ma">MA</Option>
                                <Option value="df">DF</Option>
                                <Option value="am">AM</Option>
                                <Option value="pe">PE</Option>
                                <Option value="sc">SC</Option>
                                <Option value="es">ES</Option>
                                <Option value="pb">PB</Option>
                                <Option value="pr">PR</Option>
                                <Option value="rs">RS</Option>
                                <Option value="go">GO</Option>
                                <Option value="al">AL</Option>
                                <Option value="se">SE</Option>
                                <Option value="mt">MT</Option>
                                <Option value="pi">PI</Option>
                                <Option value="rn">RN</Option>
                                <Option value="ro">RO</Option>
                                <Option value="ap">AP</Option>
                                <Option value="rr">RR</Option>
                                <Option value="ms">MS</Option>
                                <Option value="to">TO</Option>
                                <Option value="ac">AC</Option>
                            </Select>
                            <Button className="search" onClick={this.covid} type="primary" shape="circle" icon={<SearchOutlined />} />
                        </div>
                        <Descriptions size="small" bordered className="description">
                            <Descriptions.Item label="🚩 Casos">{this.state.data.cases}</Descriptions.Item>
                            <Descriptions.Item label="☠ Mortes">{this.state.data.deaths}</Descriptions.Item>
                            <Descriptions.Item label="🚨 Suspeitos">{this.state.data.suspects}</Descriptions.Item>
                        </Descriptions>
                    </div>
                </Spin>

            )
        }
    }
}