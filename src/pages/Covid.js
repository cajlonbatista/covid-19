import React, { Component } from "react";
import "./Covid.css";
import { List, Typography } from 'antd';
const data = [
    "1. Lave suas mãos com frequência. Use sabão e água ou álcool em gel.",
"2. Mantenha uma distância segura de pessoas que estiverem tossindo ou espirrando.",
"3. Use máscara quando não for possível manter o distanciamento físico.",
"4. Não toque nos olhos, no nariz ou na boca.",
"5. Cubra seu nariz e boca com o braço dobrado ou um lenço ao tossir ou expirar.",
"6. Fique em casa se você se sentir indisposto.",
"7. Procure atendimento médico se tiver febre, tosse e dificuldade para respirar.",
  ];
export default class Covid extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="covid">
                <List
                    header={<div>Siga as dicas para se manter protegido</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Typography.Text mark></Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}