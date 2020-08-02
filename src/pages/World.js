import React, { Component } from "react";
import "./Home.css";
import { SearchOutlined } from '@ant-design/icons';
import covid from "../covid.svg";
import { Select, Button, message, Spin, Descriptions } from 'antd';
import axios from "axios";
const { Option } = Select;
export default class World extends Component {
    constructor() {
        super();
        this.state = {
            pais: "",
            loading: false,
            data: {},
            request: false,
            paises: []
        }
    }
    componentDidMount() {
        axios.get("https://covid19-brazil-api.now.sh/api/report/v1/countries")
            .then(res => {
                this.setState({
                    paises: res.data.data,
                })
            });
    }
    covid = () => {
        if (this.state.uf == "") {
            message.error("Selecione um país !")
        } else {
            this.setState({
                loading: true
            })
            axios.get(`https://covid19-brazil-api.now.sh/api/report/v1/${this.state.pais}`)
                .then(res => {
                    this.setState({
                        loading: false,
                        data: res.data.data,
                        request: true,
                    })
          })
        }
    }
    handleUF = (e) => {
        this.setState({
            pais: e
        })
    }

    render() {
        if (this.state.request == false) {
            return (
                <Spin size="large" spinning={this.state.loading}>
                    <div className="home">
                        <div className="logo">
                            <img src={covid} alt="" />
                            <h3>COVID-19 no Mundo</h3>
                        </div>
                        <div className="select">
                            <Select
                                onChange={this.handleUF}
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Selecione um país"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    this.state.paises.map(pais => (
                                        <Option key={pais.country} value={pais.country}>
                                            {pais.country}
                                        </Option>
                                    ))
                                }
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
                            <h3>COVID-19 no Mundo</h3>
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
                                {
                                    this.state.paises.map(pais => (
                                        <Option key={pais.country} value={pais.country}>
                                            {pais.country}
                                        </Option>
                                    ))
                                }
                            </Select>
                            <Button className="search" onClick={this.covid} type="primary" shape="circle" icon={<SearchOutlined />} />
                        </div>
                        <Descriptions size="small" bordered className="description">
                            <Descriptions.Item label="🚩 Casos">{this.state.data.cases}</Descriptions.Item>
                            <Descriptions.Item label="☠ Mortes">{this.state.data.deaths}</Descriptions.Item>
                            <Descriptions.Item label="🚨 Confirmados">{this.state.data.confirmed}</Descriptions.Item>
                        </Descriptions>
                    </div>
                </Spin>

            )
        }
    }
}