//빌드 타임에 정적 생성됨 
//static 으로 관리하는것이 좋다 

import { Icon } from "semantic-ui-react";

export default function Error404(){
    return (
        <div style={{ padding: "200px 0", textAlign: "center", fontSize: 30}}>
            <Icon name="warning circle" color="red"/>
            404: 페이지를 찾을 수 없습니다.
        </div>
    )
}