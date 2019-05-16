import React from 'react';

export class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {
            friendName: 'kick it off for hot'
        }
        this.updateName = this.updateName.bind(this);
    }

    updateName() {
        this.setState({
            friendName: "nijia"
        });
    }
    render() {
        //return <h1 > Welcome to { this.props.friendName }! < /h1>;
        //return <h1 > Welcome to { this.state.friendName }! < /h1>;
        return ( < div >
            <
            h1 >
            welcome to { this.state.friendName }!
            <
            /h1>  <
            button onClick = { this.updateName } > click me to update name < /button> < /
            div > );
    }
}