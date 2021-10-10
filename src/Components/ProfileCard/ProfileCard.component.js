import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Row, Card, Link, Loading, User } from '@geist-ui/react'

const ProfileCard = () => {
    const { user, isLoading } = useAuth0();
    const userCapitalized = user && user.nickname.charAt(0).toUpperCase() + user.nickname.slice(1)
    return (
        <React.Fragment>
            {!isLoading ?
                <Row style={{ flexWrap: 'wrap' }} justify="space-around">
                    <Card width="330px">
                    <User src={user.picture} name={userCapitalized} />
                        <p><i>{user && userCapitalized}</i>, this is your personal profile</p>
                        <p>{user && user.email}</p>
                        <Card.Footer>
                            <Link color 
                            target="_blank" 
                            href="https://github.com/geist-org/react">Visit source code on GitHub.
                            </Link>
                        </Card.Footer>
                    </Card>
                </Row>
                :
                <Row style={{ padding: '10px 0', marginTop: "1em" }}>
                    <Loading>Cargando</Loading>
                </Row>
            }
        </React.Fragment>
    )
}

export default ProfileCard;