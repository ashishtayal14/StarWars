import React from 'react'
import Modal from '../common/modal'
import AlertContainer from 'react-alert'
import { LOADER_OPTIONS, LOGIN_HEADER, WRONG_CREDENTIALS } from '../../constants/constants'
import Loader from '../common/loader'
import _ from 'lodash'

class Login extends React.PureComponent {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.onAuthorize = this.onAuthorize.bind(this);
        this.onOpenModal = this.onOpenModal.bind(this)
        this.onCloseModal = this.onCloseModal.bind(this)
        this.showAlert = this.showAlert.bind(this)
        this.state = {
            hasError: false,
            isModalOpen: true
        }
        this.alertOptions = {
            offset: 100,
            position: 'top left',
            theme: 'dark',
            time: 4000,
            transition: 'scale',
            margin:'100px'
        }
    }

    showAlert()  {
    this.msg.error(WRONG_CREDENTIALS, {
      time: 4000,
      type: 'success'
    })
  }
  componentWillMount(){
    if(window.localStorage.getItem("status")){
        this.props.history.push('/home');
    }
  }
  componentDidMount(){
      console.log("Login Mounted");
      let totalHits = 0
    window.localStorage.setItem('totalHits', JSON.stringify(totalHits))
  }

  componentDidUpdate(prevProps, prevState) {
        const password = this.password.value;
        let peoples = this.props.people;
        if (!(prevProps.people === peoples)) {
            if (peoples.length > 0) {
                let checkPassword =_.filter(peoples, (people) => ( people.birth_year === password ))
                if(checkPassword.length > 0 ) {
                    this.onCloseModal()
                    this.setState({ hasError: false }) 
                    window.localStorage.setItem('status', JSON.stringify("login successfully"))
                }
                else {
                    this.showAlert()
                }
            }
            
            else{
                this.showAlert()
            }
            this.username.value = ""
            this.password.value = ""  
        }
  }

    onAuthorize(e) {
        e.preventDefault();
        const username = this.username.value
        const password = this.password.value
        this.props.actions.loginDataRequest(username);
        window.localStorage.setItem('username', JSON.stringify(username))
        window.localStorage.setItem('password', JSON.stringify(password))
    }
    onOpenModal() {
        this.setState({ isModalOpen: true})
    }
    onCloseModal() {
        this.setState({ isModalOpen: false })
        this.props.history.push('/home');
    }


    render() {
        return (
            <div>
               {this.props.isFetching && <Loader/>}
               
                    <div>
                        {
                            (
                                <Modal header={LOGIN_HEADER} isOpen={this.state.isModalOpen}  >
                                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                                    <form className='form-horizontal col-md-6 col-md-offset-3'>
                                        <h4>LOGIN TO STARWARS</h4>
                                        <div className='form-group'>
                                            <div>
                                                <input type="text" placeholder="Username" placeholder="username" className="user form-control" ref={(input) => { this.username = input; }} ></input>
                                            </div>
                                        </div>
                                        <div className='form-group'>
                                            <div>
                                                <input type="password" placeholder="Password" placeholder="password" className="pass form-control" ref={(input) => { this.password = input; }} ></input>
                                            </div>
                                        </div>

                                        <div className='input-group col-md-offset-4'>
                                            <button className="btn btn-default" type="submit" onClick={this.onAuthorize}>Login</button>
                                        </div>
                                    </form>
                                </Modal>
                                )
                        }
                    </div>
             

            </div>

        )
    }

}
export default Login;
