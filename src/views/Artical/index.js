import React, { Component } from 'react'

import {Route, NavLink as Link} from 'react-router-dom'



export default class Artical extends Component {
    render() {
        return (
            <div>
                <Link to='/artical/1?from=artical'>文章一</Link>
                <Link to={{
                    pathname:'/artical/2',
                    state:{
                        from:'artical'
                    }
                }}>文章二</Link>
                {/* <Route component={ArticalDetail} path="/artical/:id"/> */}
            </div>
        )
    }
}
