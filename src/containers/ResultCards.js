import React from 'react'
import {Card, Grid} from 'semantic-ui-react';

const ResultCards = (props) => {
    return(
        <Grid columns={3} padded>
            {props.results.map((item) => {
                return (
                    <React.Fragment>
                        {
                        item.map((ele) => (
                            <Card>
                                <Card.Content>
                                    <Card.Header>{ele.title}</Card.Header>
                                    <Card.Meta>{ele.author}</Card.Meta>
                                    <Card.Description>{ele.summary}</Card.Description>
                                </Card.Content>
                            </Card>
                        ))
                        }
                    </React.Fragment>
                )
            })}
        </Grid>
    )
}

export default ResultCards