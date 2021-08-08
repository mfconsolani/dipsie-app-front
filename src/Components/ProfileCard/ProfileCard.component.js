import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Row, Card, Link} from '@geist-ui/react'

const ProfileCard = () => {
    const { user } = useAuth0();
  
    return (
        <Row style={{ flexWrap: 'wrap' }} justify="space-around">
            <Card width="330px">
                <h4>{user && user.nickname}</h4>
                <p><i>{user && user.nickname}</i>, este es tu perfil personal</p>
                <Card.Footer>
                    <Link color target="_blank" href="https://github.com/geist-org/react">Visit source code on GitHub.</Link>
                </Card.Footer>
            </Card>
        </Row>
    )
}

export default ProfileCard;