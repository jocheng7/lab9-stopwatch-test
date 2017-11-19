'use strict';

var _templateObject = _taggedTemplateLiteralLoose(['\n  max-width: 150px;\n  border: 0.4em solid tan;\n  border-radius: 1.1em;\n  padding: 25px;\n  font-size: ', 'em;\n  background: green;\n  color: white;\n  outline: none;\n  flex-direction: row;\n  align-items: center;\n  justify-content: left;\n'], ['\n  max-width: 150px;\n  border: 0.4em solid tan;\n  border-radius: 1.1em;\n  padding: 25px;\n  font-size: ', 'em;\n  background: green;\n  color: white;\n  outline: none;\n  flex-direction: row;\n  align-items: center;\n  justify-content: left;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  border: 2px;\n  padding: 1.0px 2.0px 0.42em 2.0em;\n  background: yellow;\n'], ['\n  border: 2px;\n  padding: 1.0px 2.0px 0.42em 2.0em;\n  background: yellow;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  border: 5px;\n  padding: 1.0px 2.0px 0.42em 2.0em;\n  background: orange;\n \n'], ['\n  border: 5px;\n  padding: 1.0px 2.0px 0.42em 2.0em;\n  background: orange;\n \n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  border: 8px solid grey;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  justify-content: left;\n  border-radius: 20px;\n  background: #C2C5BB;\n  max-width: 550px;\n'], ['\n  border: 8px solid grey;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  justify-content: left;\n  border-radius: 20px;\n  background: #C2C5BB;\n  max-width: 550px;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

///   experiment with top level api

var styled = styled.default;

//========

var MAINTEXT = {
  TEXTSIZE: .9
};

var StyledButton = styled.button(_templateObject, MAINTEXT.TEXTSIZE);
var StyledH5 = styled.h5(_templateObject2);

var StyledMeun5 = styled.menu(_templateObject3);

var StyledDiv1 = styled.div(_templateObject4);

var pStyle = {
  fontSize: '15px',
  textAlign: 'center'
};

var fakeDb = function fakeDb() {
  return "8";
};

// added white space
var option = ' ';
var option2 = ' ';

// added white space
var whitesp1 = ' ';
var whitesp2 = ' ';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAZcf97c40i_AV7Ge5OBHEce7P8HLD11YA",
  authDomain: "stopwatchproject-bb7f4.firebaseapp.com",
  databaseURL: "https://stopwatchproject-bb7f4.firebaseio.com",
  projectId: "stopwatchproject-bb7f4",
  storageBucket: "stopwatchproject-bb7f4.appspot.com",
  messagingSenderId: "731232086655"
};
firebase.initializeApp(config);

//   Local Storeage persistance
//  only work for Window NOT iOS MacBook !!!

var storeageAvailable = function storeageAvailable(type) {
  try {
    // talk to the local storeage area
    var _storeage = window[type],
        x = '_______storeage_test________';
    // try putting s into local Storeage
    _storeage.setItem(x, x);
    _storeage.removeItem(x);
    return true;
  } catch (err) {
    // in case of failure
    // treat the error like any error in the browser
    return err instanceof DOMException && (err.code === 22 || err.code === 1014 || err.name === 'QuotaExceededError' || err.name === 'NS_ERROR_COM_QUOTA_REACHED') && storeage.length !== 0;
  }
};

var TimerOutofStoreage = function TimerOutofStoreage() {
  console.log("Place timer out Storeage");
  if (storeageAvailable('localStoreage')) {
    var timer = window.localStoreage.getItem('timer');
    return timer || 0;
  } else {
    return 0;
  }
};

var TimerIntoStorage = function TimerIntoStorage() {
  var interval = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

  console.log("Take timer into of Storeage");
  if (storeageAvailable('localStoreage')) {
    var timer = Number(window.localStorage.getItem('timer')) || 0;
    var newTimer = timer + interval;
    if (interval > 1) {
      newTimer = interval;
    }
    // increasing current total
    window.localStorage.setItem('timer', newTimer);
    console.log(timer);
  }
};

//  stateful or smart component
// tracks the authentication state (Boolean)

var AuthenData = function (_React$Component) {
  _inherits(AuthenData, _React$Component);

  function AuthenData(props) {
    _classCallCheck(this, AuthenData);

    // set the default state

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      authenticated: 1 // or use true
      //name: "Joseph"
    };
    return _this;
  }

  AuthenData.prototype.componentWillMount = function componentWillMount() {
    // talk to the datbase

    this.initAuthen();
    // setState
    // this.setState({authenticated: 1})
  };

  // 1   start listening to firebase authentication

  AuthenData.prototype.initAuthen = function initAuthen() {
    var _this2 = this;

    console.log("Start listening to firebase aut");
    firebase.auth().onAuthStateChanged(function (user) {
      console.log("Auth state has changed");
      if (user) {
        console.log("Person is authenticated");
        _this2.setState({ authenticated: 1, email: null, psw: null });
      } else {
        console.log("User NOT authenticated!!");
        _this2.setState({ authenticated: 0 });
      }
    } //  end user
    );
  };

  // anytime the person provide input

  AuthenData.prototype.onValueChanged = function onValueChanged(event) {
    var _setState;

    console.log(event.target.value);
    this.setState((_setState = {}, _setState[event.target.name] = event.target.value, _setState));
    var validity = event.target.validity;
    console.log(validity);

    if (!validity.valid) {
      var _errors;

      this.setState({
        errors: (_errors = {}, _errors[event.target.name + "Error"] = true, _errors)
      });
    } else {
      var _errors2;

      this.setState({
        errors: (_errors2 = {}, _errors2[event.target.name + "Error"] = false, _errors2)
      });
    }
  };

  AuthenData.prototype.onSubmit = function onSubmit(evt) {
    evt.preventDefault();
    console.log(this.stae);
    this.register();
  };

  //  register a new user 

  AuthenData.prototype.register = function register() {
    evt.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.psw).then(function () {
      /// it suceed
      console.log("Suceed logging into Firebase");
    }).catch(function (err) {
      console.log("Register Fail: ");
      console.log(err);
      alert(err.message);
    });
  };

  //3.  login a registered user

  AuthenData.prototype.login = function login(evt) {
    evt.preventDefault();
    console.log("In login" + this.state.email + "   psw: " + this.state.psw);
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.psw).then(function () {
      /// it suceed
      //   firebase.auth().signInWithEmailAndPassword(user.emails, user.password);     

      console.log("Suceed logging into Firebase");
    }).catch(function (err) {
      console.log("Register Fail: ");
      console.log(err);
      alert(err.message);
    });
  };

  //   logout an authenticated user

  AuthenData.prototype.logout = function logout() {
    firebase.auth().signOut();
  };

  AuthenData.prototype.renderChildren = function renderChildren(children) {
    var _this3 = this;

    return React.Children.map(children, function (child) {
      if (child.props.authenticationRequired && !_this3.state.authenticated) {
        return React.createElement(RegisterLogin, { authenticated: _this3.state.authenticated, name: _this3.state.name, email: _this3.state.email, action: _this3.onValueChanged.bind(_this3), psw: _this3.state.psw, submit: _this3.onSubmit.bind(_this3), exit: _this3.logout.bind(_this3), login: _this3.login.bind(_this3) });
      }

      var cloned = React.cloneElement(child, {
        authenticated: _this3.state.authenticated,
        logout: _this3.logout.bind(_this3)

      });
      return cloned;
    });
  };

  AuthenData.prototype.render = function render() {
    //return(null); 
    return React.createElement(
      'div',
      null,
      this.renderChildren(this.props.children)
    );
  };

  return AuthenData;
}(React.Component);

var RegisterLogin = function RegisterLogin(props) {

  var fields = undefined;

  fields = React.createElement(
    'div',
    null,
    React.createElement(
      'h2',
      null,
      'Please lock into database to continue '
    ),
    whitesp1,
    '  ',
    whitesp1,
    React.createElement(
      'form',
      null,
      React.createElement(
        StyledDiv1,
        null,
        whitesp1,
        React.createElement(
          'label',
          null,
          whitesp1,
          '   ',
          whitesp1,
          '  ',
          whitesp1,
          ' Email:   ',
          whitesp1,
          '  ',
          whitesp1,
          React.createElement('input', { type: 'text', name: 'email', onChange: props.action, value: props.email, required: true, pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$' })
        ),
        whitesp1,
        '  ',
        whitesp1
      ),
      whitesp1,
      '  ',
      whitesp1,
      React.createElement(
        StyledDiv1,
        null,
        whitesp1,
        React.createElement(
          'label',
          null,
          whitesp1,
          '   ',
          whitesp1,
          '  ',
          whitesp1,
          ' Password:  ',
          whitesp1,
          React.createElement('input', { type: 'password', name: 'psw', onChange: props.action, value: props.psw, required: true, pattern: '.{6,}' })
        ),
        whitesp1,
        '  ',
        whitesp1
      ),
      React.createElement(
        'p',
        null,
        whitesp1,
        '  ',
        whitesp1,
        whitesp1,
        '  ',
        whitesp1
      ),
      whitesp1,
      '  ',
      whitesp1,
      React.createElement(
        StyledButton,
        { onClick: props.submit, type: 'submit' },
        'Register'
      ),
      whitesp1,
      '  ',
      whitesp1,
      '  ',
      whitesp1,
      React.createElement(
        StyledButton,
        { onClick: props.login, type: 'login' },
        'Log In'
      )
    )
  );
  return React.createElement(
    'div',
    { className: 'makeItRed' },
    fields
  );
};

// ========  Stop Watch ==============================

var StopWatchData = function (_React$Component2) {
  _inherits(StopWatchData, _React$Component2);

  function StopWatchData() {
    _classCallCheck(this, StopWatchData);

    var _this4 = _possibleConstructorReturn(this, _React$Component2.call(this));

    console.log("I am conceived , but chica wo wow..");
    _this4.state = {
      timer: 1
    };
    return _this4;
  }

  StopWatchData.prototype.componentWillMount = function componentWillMount() {
    this.initialData();
    console.log("I am on screen");
    clearInterval(this.tiktoc);
    // getTime();
    var datestamp = undefined;
    var currentdate = new Date();
    this.setState({ datestamp: currentdate });
    console.log("add date stamp: " + currentdate);
    // bad way
    //this.state={
    //  coffeeDrinks: 7
    // }
    // setState allow React LifeCycle to be alert and manage the change
    //this.coffeeDrinks = 5;
    // this.state({coffeeDrinks: functionName()})
    // this.setState(
    // {timer: 16}, function(){console.log(this.state);}
    this.setState({ timer: TimerOutofStoreage() }, function () {
      console.log("timer 2" + this.state);
    });
  };

  StopWatchData.prototype.initialData = function initialData() {
    var _this5 = this;

    //  read from the database
    firebase.database().ref('Watch').on('value', function (snapshot) {
      console.log("Connected to database");
      console.log(snapshot.val());

      var dbTimer = snapshot.val().watchTime || 0;
      var localTimer = TimerOutofStoreage();

      if (dbTimer > localTimer) {
        // update local total
        TimerIntoStorage(dbTimer);
        console.log("Updated dbTimer");
      } else if (localTimer > dbTimer) {
        // update dbase  - we were offline
        firebase.database().ref('Watch').set({ watchTime: localTimer });
      } else if (localTimer == dbTimer) {
        console.log(" You are synced to Dbase ");
      }

      //   did we get any data? 
      if (snapshot) {
        var data = snapshot.val();
        _this5.setState({ timer: data.watchTime });
        //this.setState( snapshot.val());
      }
    });
  }; // end initialData

  StopWatchData.prototype.tick = function tick() {
    this.setState({ timer: this.state.timer + 1 });
  };

  StopWatchData.prototype.TimerStart = function TimerStart() {
    var _this6 = this;

    //alert("Start My Timer");
    //  update the state
    //  state.total + = total;  will not get state into react

    //  connect & update DataBase
    //firebase.database().ref('Watch').set({watchTime: 13});
    var temp = Number(this.state.timer);
    this.setState({ timer: temp + 1 }, function () {
      firebase.database().ref('Watch').set({ watchTime: _this6.state.timer });
      TimerIntoStorage();
    });

    clearInterval(this.tiktoc);
    this.tiktoc = setInterval(this.tick.bind(this), 1000);
  };

  StopWatchData.prototype.TimerStop = function TimerStop() {
    alert("Stop My Timer");
    //  update the state   
    clearInterval(this.tiktoc);
    //  connect & update DataBase
    //firebase.database().ref('Watch').set({watchTime: 13});
  };

  StopWatchData.prototype.ResetTimer = function ResetTimer() {
    //  update the state
    clearInterval(this.tiktoc);
    //this.setState({tiktoc: 1});
    this.setState({ timer: 0 });
    alert("Reset My Timer");
    var test = this.state.datestamp;
    console.log("Reset date stamp: " + test);
    //  connect & update DataBase
    //firebase.database().ref('Watch').set({watchTime: 13});
  };

  StopWatchData.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(MenuBar, { logmeout: this.logout }),
      React.createElement(
        'p',
        null,
        ' ',
        option,
        ' '
      ),
      React.createElement(UI, { total: this.state.timer, actStart: this.TimerStart.bind(this),
        Bstop: this.TimerStop.bind(this), Rtimer: this.ResetTimer.bind(this) })
    )
    //   actStart={this.TimerStart.bind(this)} no  () after TimerStart we just want the funtion awareness but not executed
    ;
  };

  return StopWatchData;
}(React.Component);

var DateComp = function DateComp(props) {
  var formdate = function formdate(event) {
    //console.log("Satrt drinking coffee" + {props});
    //props.action();
  };
  return React.createElement(
    'div',
    { className: 'alarm-clock' },
    React.createElement(
      'div',
      { className: 'date' },
      React.createElement(
        'span',
        { className: 'month' },
        'Date details'
      ),
      React.createElement('span', { className: 'day' }),
      ',',
      React.createElement('span', { className: 'year' })
    ),
    React.createElement(
      'div',
      { className: 'time' },
      React.createElement('span', { className: 'hours' }),
      React.createElement(
        'span',
        { className: 'colon' },
        ':'
      ),
      React.createElement('span', { className: 'minutes' }),
      React.createElement(
        'span',
        { className: 'colon' },
        ':'
      ),
      React.createElement('span', { className: 'seconds' })
    )
  );
};

var StartButton = function StartButton(props) {
  var treatMe = function treatMe(event) {
    //console.log("Satrt drinking coffee" + {props});
    props.action();
  };
  return React.createElement(
    StyledButton,
    { className: 'watchButton', onClick: treatMe },
    props.label,
    ' '
  );
};

var StopButton = function StopButton(props) {
  var testMe = function testMe(event) {
    props.actonB();
    //alert("Stop drinking coffee");
  };
  return React.createElement(
    StyledButton,
    { className: 'watchButton', onClick: testMe },
    props.label,
    ' '
  );
};

var ResetButton = function ResetButton(props) {
  var ResetMe = function ResetMe(event) {
    //  ----  stop timer & place timer into storeage ***
    //let temp2= Time(this.state.timer);
    props.reset2();

    // this.setState({tiktoc: 1});
    // clearInterval(this.timer);

    // this.setState({timer: 0}); 
    //console.log("reset timer:  " + this.state.timer + "more "+ props.timer); 
  };
  return React.createElement(
    StyledButton,
    { className: 'watchButton', onClick: ResetMe },
    props.label,
    ' '
  );
};

var MenuBar = function MenuBar(props) {
  var logmeout = function logmeout(event) {
    props.logout.bind(undefined);
    //alert("Stop drinking coffee");
  };
  return React.createElement(
    'div',
    { className: 'dropdown' },
    React.createElement(
      'p',
      null,
      '   '
    ),
    React.createElement(
      'p',
      null,
      '   '
    ),
    React.createElement(
      'p',
      null,
      '   '
    ),
    React.createElement(
      StyledMeun5,
      { id: 'myDropdown', className: 'dropdown-content' },
      React.createElement(
        'div',
        null,
        React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { style: pStyle, href: 'https://www.w3schools.com/html/' },
              'Link 1'
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { style: pStyle, href: 'https://www.google.com/' },
              'Link 2'
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { style: pStyle, href: 'https://www.facebook.com/' },
              'Link 3'
            )
          )
        )
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          StyledButton,
          { onClick: props.logmeout },
          'Log out'
        )
      )
    )
  );
};

var UI = function UI(props) {
  return React.createElement(
    'div',
    { className: 'container' },
    React.createElement(
      'div',
      { className: 'innerContent' },
      React.createElement(
        'h4',
        null,
        ' Hi ',
        props.name,
        '  ® '
      ),
      React.createElement(DateComp, null),
      React.createElement(
        'p',
        null,
        '   '
      ),
      React.createElement(
        'p',
        null,
        '   '
      ),
      React.createElement(
        StyledH5,
        null,
        'Tracking coffee comsumption '
      ),
      React.createElement(
        StyledH5,
        null,
        ' Total Coffee: ',
        props.total,
        ' '
      ),
      React.createElement(
        'p',
        null,
        '  ',
        option,
        ' '
      ),
      React.createElement(
        'div',
        { className: 'alignButton' },
        React.createElement(StartButton, { label: 'Start', action: props.actStart }),
        '   ',
        option,
        ' ',
        option,
        React.createElement(StopButton, { label: 'Stop', actonB: props.Bstop }),
        '  ',
        option,
        ' ',
        option,
        React.createElement(ResetButton, { label: 'Reset', reset2: props.Rtimer })
      ),
      React.createElement(
        'p',
        null,
        '  ',
        option,
        ' '
      )
    )
  );
};

// ====================================================

var Greeting = function (_React$Component3) {
  _inherits(Greeting, _React$Component3);

  function Greeting() {
    _classCallCheck(this, Greeting);

    return _possibleConstructorReturn(this, _React$Component3.call(this));
  }

  Greeting.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(StopWatchData, { authenticationRequired: true }),
      'I\'m In',
      React.createElement(
        'p',
        null,
        '  ',
        option,
        ' '
      ),
      React.createElement(
        'p',
        null,
        '  ',
        option,
        ' '
      ),
      option,
      ' ',
      option,
      '   ',
      option,
      ' ',
      option,
      React.createElement(
        StyledButton,
        { onClick: this.props.logout },
        'Log out'
      ),
      option,
      ' ',
      option,
      '   ',
      option,
      ' ',
      option
    );
  };

  return Greeting;
}(React.Component);

var AuthicatedProvider = function AuthicatedProvider(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      AuthenData,
      null,
      React.createElement(Greeting, { authenticationRequired: true })
    )
  );
};

ReactDOM.render(React.createElement(AuthicatedProvider, null), document.querySelector('#app'));

//ReactDOM.render(<Messages messages={messages}  />, document.querySelector('#app'));