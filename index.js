import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card'
import Collapse from "./components/Collapse";

const App=()=> {

    return (
        <div className="container">

            <div className="row">
                <div className="card-group">

                    <div className="col">
                        <Collapse href="collapseExample1">
                            <Card

                                cardText="Lorem Ipsum Text I"
                                updatedTime="Last Updated 1 mim ago"
                                image="https://picsum.photos/id/10/200/300"/>
                        </Collapse>
                    </div>

                    <div className="col">
                        <Collapse href="collapseExample2">
                            <Card
                                cardTitle="Card Title II"
                                cardText="Lorem Ipsum Text II"
                                updatedTime="Last Updated 2 mim ago"
                                image="https://picsum.photos/id/2/200/300"/>
                        </Collapse>
                    </div>

                    <div className="col">
                        <Collapse href="collapseExample3">
                            <Card
                                cardTitle="Card Title III"

                                updatedTime="Last Updated 3 mim ago"
                                image="https://picsum.photos/id/3/200/300"/>
                        </Collapse>
                    </div>

                </div>

            </div>

        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root')  //document.getElementById('root')
);
