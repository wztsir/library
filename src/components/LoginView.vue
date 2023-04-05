<template>
  <div class="body">
    <div class="ALL" id="inde">
      <div class="login_page" v-show="islogin">
        <div class="upBlock">

        </div>
        <div class="head">
          <div class="headtext">Welcome</div>
          <div class="headtext_">Library Manage System</div>
        </div>
        <div class="formBor">
          <div class="choseBor">
            <button class="choseButton" :style="{'background-color':nowform?'#ebebfc':'white'}" @click="changePerson">
              Student
            </button>
            <button class="choseButton_b" :style="{'background-color':!nowform?'#ebebfc':'white'}" @click="changeTeam">
              Administrator
            </button>
          </div>
          <div class="formTextBor">
            <input type="text" class="formInput" placeholder="Telephone/Student number" v-model="loginForm.contact">
            <input type="text" class="formInput_b" placeholder="Password" v-model="loginForm.password">
          </div>
        </div>
        <button class="login" @click="submitLoginForm">Login</button>

        <button class="register" @click="to_register">Register</button>
<!--        <div class="wrongMessage" v-show="wrongMessageTag">用户名或密码错误</div>-->
      </div>
      <div class="register_page" v-show="!islogin">

        <div class="registerHead">
          <button class="registerBack" @click="to_login">{{ '<' }}</button>
          <div class="registerText">Register</div>

        </div>
        <div class="registerForm">
          <div class="registerFormBlock">
            <div class="registerIntroduce">Name:</div>
            <input type=text class="registerInputForm" v-model="registerForm.username">
          </div>
          <div class="WrongMessage">
            <div class="worngInput" v-show="registerWrongMessage.username.showing">
              {{ registerWrongMessage.username.text }}
            </div>

          </div>


          <div class="registerFormBlock">
            <div class="registerIntroduce">College:</div>
            <input type=text class="registerInputForm" v-model="registerForm.college"></div>
          <div class="WrongMessage">
            <div class="worngInput" v-show="registerWrongMessage.college.showing">
              {{ registerWrongMessage.college.text }}
            </div>
          </div>
          <div class="registerFormBlock">
            <div class="registerIntroduce">Campus:</div>
            <input type=text class="registerInputForm" v-model="registerForm.resident_campus"></div>
          <div class="WrongMessage">
            <div class="worngInput" v-show="registerWrongMessage.resident_campus.showing">
              {{ registerWrongMessage.resident_campus.text }}
            </div>
          </div>


          <div class="registerFormBlock">
            <div class="registerIntroduce">Telephone:</div>
            <input type=text class="registerInputForm" v-model="registerForm.contact"></div>
          <div class="WrongMessage">
            <div class="worngInput" v-show="registerWrongMessage.contact.showing">
              {{ registerWrongMessage.contact.text }}
            </div>
          </div>


          <div class="registerFormBlock">
            <div class="registerIntroduce">Password:</div>
            <input type=text class="registerInputForm" v-model="registerForm.password"></div>
          <div class="WrongMessage">
            <div class="worngInput" v-show="registerWrongMessage.password.showing">
              {{ registerWrongMessage.password.text }}
            </div>
          </div>


<!--          <div class="registerFormBlock">-->
<!--            <div class="registerIntroduce" style="width: 100px">confirm password:</div>-->
<!--            <input type=text class="registerInputForm" v-model="registerForm.C_password"></div>-->
<!--          <div class="WrongMessage">-->
<!--            <div class="worngInput" v-show="registerWrongMessage.C_password.showing">-->
<!--              {{ registerWrongMessage.C_password.text }}-->
<!--            </div>-->
<!--          </div>-->


          <div class="registerFormBlock" style=" border-bottom-style:none;">
            <div class="registerIntroduce">Gender:</div>
            <button class="gender_button" :style="{'background-color':registerForm.gender==0?'#ebebfc':'white'}"
                    @click="chose_secrate">Secrecy
            </button>
            <button class="gender_button" :style="{'background-color':registerForm.gender==1?'#ebebfc':'white'}"
                    @click="chose_boy">M
            </button>
            <button class="gender_button" :style="{'background-color':registerForm.gender==2?'#ebebfc':'white'}"
                    @click="chose_girl">W
            </button>
          </div>
          <div class="WrongMessage">
            <div class="worngInput" v-show="registerWrongMessage.gender.showing">
              {{ registerWrongMessage.gender.text }}
            </div>
          </div>


        </div>
        <button class=submitRegister @click="submit_register">Register</button>
      </div>


    </div>
  </div>


</template>

<script>
import axios from 'axios'

export default {
  el: '#inde', //el用于制定当前Vue实例为哪个容器，值通常为CSS选择器字符串
  data() {
    return {
      act: [],
      name: "白",
      act_information: [],
      nowform: true,
      wrongMessageTag: true,
      user_id: -1,
      loginForm: {
        contact: "",
        password: ""

      },
      islogin: true,
      registerForm: {
        username: "",
        password: "",
        college: "",
        resident_campus: "",
        contact: "",
        C_password: "",
        gender: 1

      },
      registerWrongMessage: {
        username: {
          showing: false,
          text: ""
        },
        password: {
          showing: false,
          text: ""
        },
        C_password: {
          showing: false,
          text: ""
        },
        college: {
          showing: false,
          text: ""
        },
        resident_campus: {
          showing: false,
          text: ""
        },
        contact: {
          showing: false,
          text: ""
        },
        gender: {
          showing: false,
          text: ""
        }

      }
    }


  },
  methods: {
    init: function () {

    },
    changeTeam: function () {
      this.nowform = false
    },
    changePerson: function () {
      this.nowform = true
    },
    to_register: function () {
      this.islogin = false
    },
    to_login: function () {
      this.islogin = true
    },

    chose_boy: function () {
      this.registerForm.gender = 1
    },
    chose_girl: function () {
      this.registerForm.gender = 2
    },
    chose_secrate: function () {
      this.registerForm.gender = 0
    },

    submitLoginForm: function () {
      var that = this
      console.log(that.form)
      axios({
        method: 'post',
        url: ' /api/v1.1/user/login',
        data: that.loginForm,
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then(function (response) {
        console.log(response)
        that.user_id = response.data.data.user_id
        window.location.href = "./person" + "?" + that.user_id

      }).catch(function (err) {
        console.log(err.response.data.message);
        var objInfo = {
          infoTips:err.response.data.message,	//提示消息 可选 也是默认值
          duration:800,	//消失时间 可选 也是默认值
          width:220,		//宽度 可选 也是默认值

        };
        that.showTips(objInfo);
      })

    },
    submit_register: function () {
      var that = this
      var tag = true
      that.registerWrongMessage.username.showing = false
      that.registerWrongMessage.college.showing = false
      that.registerWrongMessage.password.showing = false
      that.registerWrongMessage.C_password.showing = false
      that.registerWrongMessage.gender.showing = false
      that.registerWrongMessage.contact.showing = false
      that.registerWrongMessage.resident_campus.showing = false
      console.log(that.registerForm.username)
      if (that.registerForm.username == "") {
        that.registerWrongMessage.username.showing = true
        that.registerWrongMessage.username.text = "请输入姓名"
        tag = false
      }
      if (that.registerForm.college == "") {
        that.registerWrongMessage.college.showing = true
        that.registerWrongMessage.college.text = "请输入学院"
        tag = false
      }
      if (that.registerForm.password == "") {
        that.registerWrongMessage.password.showing = true
        that.registerWrongMessage.password.text = "请输入密码"
        tag = false
      }

      if (that.registerForm.C_password == "") {
        that.registerWrongMessage.C_password.showing = true
        that.registerWrongMessage.C_password.text = "请输入确认密码"
        tag = false
      }
      if (that.registerForm.gender == 3) {
        that.registerWrongMessage.gender.showing = true
        that.registerWrongMessage.gender.text = "请选择性别"
        tag = false
      }
      if (that.registerForm.contact == "") {
        that.registerWrongMessage.contact.showing = true
        that.registerWrongMessage.contact.text = "请输入电话号码"
        tag = false
      }
      if (that.registerForm.resident_campus == "") {
        that.registerWrongMessage.resident_campus.showing = true
        that.registerWrongMessage.resident_campus.text = "请输入校区"
        tag = false
      }
      if (that.registerForm.password != "" && that.registerForm.password != that.registerForm.C_password) {
        that.registerWrongMessage.password.showing = true
        that.registerWrongMessage.password.text = "密码与确认密码不一致"
        tag = false
      }
      if (that.registerForm.password != "" && (that.registerForm.password.length < 8 || that.registerForm.password.length > 16)) {
        that.registerWrongMessage.password.showing = true
        that.registerWrongMessage.password.text = "密长度必须为8~16个字符"
        tag = false
      }
      if (tag == true) {
        console.log(that.registerForm)

        var ret = {
          'username': that.registerForm.username,
          'password': that.registerForm.password,
          'college': that.registerForm.college,
          'resident_campus': that.registerForm.resident_campus,
          'contact': that.registerForm.contact,
          'gender': that.registerForm.gender
        }

        axios({
          method: 'post',
          url: '/api/v1.1/user/register',
          data: ret,
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          console.log(response)
          that.to_login()
        })
      }
    },
    showTips(objInfo) {
      var w = objInfo && objInfo.width || 180;
      var duration = objInfo && objInfo.duration || 800;

      var infoTips = objInfo && objInfo.infoTips || "hi";

      var alert = document.createElement("div");
      alert.style.cssText = `position:absolute;left:50%;top:10%;z-index:99999;transform: translate(-50%,-50%);border-color: rgb(255, 170, 170);color:#f56c6c;font-size:18px;border-radius:10px;box-shadow:inset 0px 0px 8px #fff;background-color:#fef0f0;overflow:hidden;`;
      alert.style.width = w + "px";
      var con = document.createElement("p");
      con.style.cssText = `display:flex;justify-content:center;align-items:center;padding:0px 10px 0px;margin-bottom:10px;font-size:16px;word-break:break-all;`;
      con.innerHTML = infoTips;

      // alert.appendChild(title);
      alert.appendChild(con);
      document.body.appendChild(alert);
      setTimeout(function () {
        document.body.removeChild(alert);
      }, duration);
    },


    created() {
      this.init()
    }
  }
}
</script>
<style>
html {
  height: 100%;
}

#app {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
}

.upBlock {
  height: 20px;
}

.head {
  height: 100px;
}

.headtext {
  font-size: 48px;
  position: relative;
  color: #9999FF;
  left: 6%;
}

.headtext_ {
  font-size: 30px;
  color: #9999FF;
  position: relative;
  left: 6%;
}

.formBor {
  margin-top: 100px;
  width: 100%;
}

.formTextBor {
  position: relative;
  left: 10%;
  width: 80%;
  height: 180px;
  background-color: #ebebfc;
  border-radius: 0px 0px 20px 20px;
}

.choseBor {
  position: relative;
  left: 10%;
  height: 60px;
  width: 100%;
}

.choseButton {

  border-radius: 20px 20px 0px 0px;
  height: 60px;
  width: 40%;
  border-style: none;
  font-size: 20px;
  font-weight: 1000;
  color: #9999FF
}

.choseButton_b {
  margin-left: -4px;
  border-radius: 20px 20px 0px 0px;
  height: 60px;
  width: 40%;
  border-style: none;
  font-size: 20px;
  font-weight: 1000;
  color: #9999FF
}

.choseButton:hover {
  border-color: #9999FF;

}

.choseButton_b:hover {
  border-color: #9999FF;

}

.formInput {
  background-color: white;
  border-style: none;
  border-radius: 18px;
  height: 36px;
  width: 70%;
  margin-top: 40px;
  margin-left: 50px;
  text-align: center;

}

.formInput_b {
  background-color: white;
  border-style: none;
  border-radius: 18px;
  height: 36px;
  width: 70%;
  margin-top: 20px;
  margin-left: 50px;
  text-align: center;
}

.login {
  height: 60px;
  width: 80%;
  position: relative;
  left: 10%;
  margin-top: 30px;
  background-color: #ebebfc;
  border-style: none;
  border-radius: 30px;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 20px;
  color: #9999FF;
  text-align: center;
}

.login:hover {
  border-style: solid;
  border-width: 2px;
  border-color: #9999FF;
}

.wrongMessage {
  position: relative;
  height: 40px;
  width: 450px;
  left: 10%;
  border-radius: 18px;
  margin-top: 60px;
  margin-left: 25px;
  border-style: solid;
  border-width: 2px;
  border-color: rgb(255, 170, 170);
  text-align: center;
  padding-top: 10px;
  font-size: 18px;
  color: rgb(255, 170, 170)
}

.register {

  position: relative;
  top: 30px;
  border-style: none;
  font-size: 18px;
  background-color: white;
  color: #9999FF;
  text-decoration: underline;
  left: 280px;
}

.register:hover {
  color: #6868f8;
}

.registerHead {
  height: 80px;
  background-color: #f0f4ff;

  display: -webkit-flex;
  display: flex;
}

.gender_button {
  background-color: white;
  border-style: none;
  font-size: 20px;
  height: 30px;
  width: 80px;
  margin-left: 10px;
  border-radius: 10px;
}

.gender_button:hover {
  border-style: solid;
  border-width: 2px;
  height: 30px;
  border-color: #ebebfc;
  border-radius: 10px;
}

.registerText {
  font-size: 20px;
  /*font-weight: 400;*/
  letter-spacing: 10px;
  position: relative;
  margin-top: 40px;
  left: 20%;
  color: #000080;


}

.registerBack {
  position: relative;
  font-size: 32px;
  font-weight: 400;
  border-style: none;
  background-color: #f0f4ff;
  margin-left: 5%;
  margin-top: 30px;
  color: #000080;
}

.registerForm {
  margin-top: 40px;
}

.registerBack:hover {
  color: #9999FF;
}

.registerFormBlock {
  display: -webkit-flex;
  display: flex;
  position: relative;
  left: 5%;
  margin-top: 5px;
  width: 90%;
  height: 30px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: gray;

}

.registerIntroduce {

  font-size: 20px;
}

.registerInputForm {
  margin-left: 10px;
  width: 80%;

  border-color: white;
  border-width: 0px;
  border-style: none

}

.registerInputForm:hover {
  border-color: #9999FF;
}

.submitRegister {
  position: relative;
  width: 80%;
  height: 50px;
  background-color: #ebebfc;
  color: #9999FF;
  border-radius: 25px;
  border-style: none;
  left: 10%;
  margin-top: 10px;
  font-size: 26px;
}

.submitRegister:hover {
  border-color: #9999FF;
  border-style: solid;
  border-width: 2px;
}

.WrongMessage {
  height: 25px;
}

.worngInput {

  position: relative;
  z-index: 200;
  width: 45%;
  left: 5%;
  margin-top: 5px;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(255, 170, 170);
  padding-left: 20px;
  font-size: 14px;
  color: rgb(255, 170, 170)
}
</style>