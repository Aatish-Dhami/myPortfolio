import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

export default function Cards(props) {
    return (
        <a href={props.url} target="_blank">
            <Card
                hoverable
                style={{  width: 240,}}
                cover={<img alt="Project" src={props.src} />}>
                <Meta title={props.title} description={props.desc} />
            </Card>
      </a>

    )
}