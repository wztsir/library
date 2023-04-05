<template>
  <div id="person">
    <div class="index" v-show="!formShow">
      <div class="body">
        <div class="head">
          <div class="meImage">
            <img src="../assets/img/person.jpg" width="68" height="68">
          </div>
          <div class="info">
            <div class="name">
              Xiao Wang
<!--              {{ user.username }}-->
            </div>
            <div class="address">
              Software College-SCUT
<!--              {{ user.college }}-{{ user.resident_campus }}-->
            </div>
            <div class="id">
              ID : 202030202030
            </div>
          </div>

          <button @click="clickV" class="moreInfo" :style="verityO">
            more
<!--            {{ verityAText }}-->
          </button>


        </div>

        <div class="bodyout">
          <div class="regulations">
            <div class="regulation">
              <img class="regulationImg" src="../assets/img/get.png" width="25" height="25">
              <div class="regulationTitle">
                Favorites
              </div>

            </div>
            <div class="regulation">
              <img class="regulationImg" src="../assets/img/record.png" width="25" height="25">
              <div class="regulationTitle">
                Appointment Records
              </div>
            </div>
            <div class="regulation">
              <img class="regulationImg" src="../assets/img/wrong.png" width="25" height="25">
              <div class="regulationTitle">
                Violation Records
              </div>
            </div>
            <div class="regulation">
              <img class="regulationImg" src="../assets/img/knowledge.png" width="25" height="25">
              <div class="regulationTitle">
                Release Announcements
              </div>
            </div>
            <div class="regulation ">
              <img class="regulationImg" src="../assets/img/getout.png" width="25" height="25">
              <div class="regulationTitle last">
                Login Out
              </div>
            </div>
          </div>
        </div>
        <div class="guider">
          <div class="guiderJump">

            <button class="guiderButton">
              <img src="../assets/img/gid_uni.png" width="25" height="25" @click="toActivity">
              <div class="guiderText">Notice</div>
            </button>
            <button class="guiderButton">
              <img src="../assets/img/gid_map.png" width="25" height="25" @click="toAppointment">
              <div class="guiderText">Appointment</div>
            </button>
            <button class="guiderButton">
              <img src="../assets/img/gid_my.png" width="25" height="25" @click="toPerson">
              <div class="guiderText">me</div>
            </button>
          </div>
        </div>
      </div>

    </div>
    <div class="formBo" v-show="formShow">

      <div class="formHead">
        <button class="formBack" @click="to_index">{{ '<' }}</button>
        <div class="formText">{{ formHead }}</div>
      </div>
      <div class="formV" v-show="formTag==1">
        <div class="form">
          <div class="formBlock">
            <div class="formIntroduce">真实姓名:</div>
            <input type=text class="formInputForm" style="width:65%" v-model="Vform.real_name">
          </div>
          <div class="WrongMessage">
            <div class="worngInput" v-show="VformWrong.real_name.show">{{ VformWrong.real_name.text }}</div>
          </div>

          <div class="formBlock">
            <div class="formIntroduce">学生ID:</div>
            <input type=text class="formInputForm" v-model="Vform.student_id">
          </div>
          <div class="WrongMessage">
            <div class="worngInput" v-show="VformWrong.student_id.show">{{ VformWrong.student_id.text }}</div>
          </div>

          <div class="formBlock">
            <div class="formIntroduce">邮箱:</div>
            <input type=text class="formInputForm" v-model="Vform.email">
          </div>
          <div class="WrongMessage">
            <div class="worngInput" v-show="VformWrong.email.show">{{ VformWrong.email.text }}</div>
          </div>

          <div class="formBlock">
            <div class="formIntroduce">验证码:</div>
            <input type=text class="formInputForm" style="width:40%" v-model="Vform.auth_code">
            <div class="formSend" @click="send_auth_code">{{ VformWrong.auth_code.sendtext }}</div>
          </div>
          <div class="WrongMessage">
            <div class="worngInput" v-show="VformWrong.auth_code.show">{{ VformWrong.auth_code.text }}</div>
          </div>
        </div>
        <button class=submitRegister @click="VformSubmit">实名认证</button>
      </div>
      <div class="formCreate" v-show="formTag==2">
        <div class="form">
          <div>上传图片</div>
          <div class="formBlock">
            <div class="formIntroduce">活动标题</div>
            <input type=text class="formInputForm" style="width:65%" v-model="Vform.real_name">
          </div>
          <div class="WrongMessage">
            <div class="worngInput" v-show="VformWrong.real_name.show">{{ VformWrong.real_name.text }}</div>
          </div>

          <div class="formBlock">
            <div class="formIntroduce">活动描述</div>
            <input type=text class="formInputForm" v-model="Vform.student_id">
          </div>
          <div class="WrongMessage">
            <div class="worngInput" v-show="VformWrong.student_id.show">{{ VformWrong.student_id.text }}</div>
          </div>

          <div class="formBlock">
            <div class="formIntroduce">活动地点</div>
            <input type=text class="formInputForm" v-model="Vform.email">
          </div>
          <div class="WrongMessage">
            <div class="worngInput" v-show="VformWrong.email.show">{{ VformWrong.email.text }}</div>
          </div>

        </div>
        <button class=submitRegister @click="VformSubmit">实名认证</button>
      </div>
      <div class="formChange" v-show="formTag==3">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "PersonView",
  components: {},
  // 13829816170
  el: '#person',
  data() {
    return {
      user: {},
      act: [],
      team: [],
      verityO: {},
      verityAText: "未认证",

      nowTag: 1,
      TagText: "发现",
      formHead: "实名认证",
      formTag: 1,
      formKind: 1,
      formShow: false,

      Vform: {
        real_name: "",
        student_id: "",
        email: "",
        auth_code: "",
      },
      VformWrong: {
        real_name: {
          show: false,
          text: "1"
        },
        student_id: {
          show: false,
          text: "1"
        },
        email: {
          show: false,
          text: "1"
        },
        auth_code: {
          show: false,
          text: "1",
          sendcode: true,
          sendtext: "发送验证码",
          sendtime: null,
          count: 0,
          fontSize: '20px'
        }
      }

    }
  },
  methods: {
    get_url: function () {
      let url = window.location.search
      url = url.split('?')
      this.user.user_id = url[1]
      if (this.user_id == "undefined")
        this.user_id = undefined
    },
    reV: function () {
      if (this.user.is_verified == true) {
        this.verityAText = "本科生"
        console.log(this.verityAtext)
        this.verityO.borderStyle = "solid"
        this.verityO.color = "navy"
        this.verityO.borderColor = "#9999FF"
        this.verityO.backgroundColor = "white"
      } else {
        this.verityAText = "未认证"
        this.verityO.borderStyle = "none"
        this.verityO.color = "black"
        this.verityO.borderColor = "#eeeded"
        this.verityO.backgroundColor = "#eeeded"
      }

    },
    toActivity: function () {
      window.location.href = "./activity" + '?' + this.user.user_id

    },
    toOrganize: function () {
      window.location.href = "./organize" + '?' + this.user.user_id

    },
    toAppointment: function () {
      window.location.href = "./appointment" + '?' + this.user.user_id

    },
    toPerson: function () {
      window.location.href = "./person" + '?' + this.user.user_id

    },

    changeTag: function (tag) {
      if (tag != this.nowTag) {
        if (tag == 1 || tag == 3) {
          this.TagText = "发现"
          this.init_act_p();


          this.init_team_p();
        } else if (tag == 2) {
          this.TagText = "创建"
          this.init_act_c();
          this.init_team_c();
        }
      }
      this.nowTag = tag
    },


    init() {
      var that = this
      axios.get("/api/v1.1/user/" + that.user.user_id).then(function (response) {
        console.log(response)

        that.user = response.data.data
        that.init_act_p()
        that.init_team_p()
        that.reV()
      }, function () {
      })
    },
    init_act_p() {
      var that = this
      axios.get("/api/v1.1/user/" + that.user.user_id + "/activity/join").then(function (response) {
        that.act = response.data.data
      }, function () {
      })

    },
    init_team_p() {
      var that = this
      axios.get("/api/v1.1/user/" + that.user.user_id + "/team/join").then(function (response) {
        that.team = response.data.data
      }, function () {
      })
    },
    init_act_c() {
      var that = this
      axios.get("/api/v1.1/user/" + that.user.user_id + "/activity/release").then(function (response) {
        that.act = response.data.data
      }, function () {
      })

    },
    init_team_c() {
      var that = this
      axios.get("/api/v1.1/user/" + that.user.user_id + "/team/release").then(function (response) {
        that.team = response.data.data
      }, function () {
      })
    },
    to_activity(card_id) {
      console.log(card_id)
      window.location.href = "./activity" + '?' + this.user.user_id + '?' + card_id
    },
    to_team(card_id) {
      window.location.href = "./organize" + '?' + this.user.user_id + '?' + card_id
    },


    to_index() {
      this.formShow = false
    },
    to_form(tag, kind) {
      this.formTag = tag
      this.formShow = true
      this.formkind = kind
      if (tag == 1) this.formHead = "实名认证"
      if (tag == 2 && kind == 1) this.formHead = "创建活动"
      if (tag == 2 && kind == 2) this.formHead = "创建队伍"
      if (tag == 3 && kind == 1) this.formHead = "修改活动信息"
      if (tag == 3 && kind == 2) this.formHead = "修改队伍信息"
    },

    clickV() {
      if (this.user.is_verified != true)
        this.to_form(1, 0)
    },
    click_act() {
      if (this.nowTag == 1)
        window.location.href = "./activity" + '?' + this.user.user_id
      if (this.nowTag == 2)
        this.to_form(2, 1)
    },
    click_team() {
      if (this.nowTag == 1)
        window.location.href = "./organize" + '?' + this.user.user_id
      if (this.nowTag == 2)
        this.to_form(2, 2)
    },
    check_email() {
      var that = this
      that.VformWrong.email.show = false
      if (that.Vform.email == '') {
        that.VformWrong.email.show = true
        that.VformWrong.email.text = "请输入邮箱"
      }
      var str = that.Vform.email.split('@')
      if (str[1] != "mail.scut.edu.cn") {
        that.VformWrong.email.show = true
        that.VformWrong.email.text = "该邮箱不符合认证要求"
      }
    },
    check_Vform() {
      var that = this
      var tag = true
      this.check_email()
      that.VformWrong.real_name.show = false
      that.VformWrong.student_id.show = false

      that.VformWrong.auth_code.show = false
      if (that.Vform.real_name == '') {
        that.VformWrong.real_name.show = true
        that.VformWrong.real_name.text = "请输入姓名"
      }
      if (that.Vform.student_id == '') {
        that.VformWrong.student_id.show = true
        that.VformWrong.student_id.text = "请输入学号"
      }

      if (that.Vform.auth_code == '') {
        that.VformWrong.auth_code.show = true
        that.VformWrong.auth_code.text = "请输入验证码"
      }


      if (that.Vform.student_id.length != 12) {
        that.VformWrong.student_id.show = true
        that.VformWrong.student_id.text = "学号长度不正确"
      }
      if (that.Vform.auth_code.length != 6) {
        that.VformWrong.auth_code.show = true
        that.VformWrong.auth_code.text = "验证码长度不正确"
      }


    },

    send_auth_code() {
      this.check_email()
      var that = this
      if (that.VformWrong.auth_code.sendtime != null) {
        return
      }
      if (that.VformWrong.email.show == false) {
        var ret = {
          'email': that.Vform.email
        }
        axios({
          method: 'post',
          url: '/api/v1.1/user/auth',
          data: ret,
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (response) {
          var TIME_COUNT = 60
          if (that.VformWrong.auth_code.sendtime == null) {
            that.VformWrong.auth_code.count = TIME_COUNT
            that.VformWrong.auth_code.sendtime = setInterval(() => {
              if (that.VformWrong.auth_code.count > 0 && that.VformWrong.auth_code.count <= TIME_COUNT) {
                that.VformWrong.auth_code.count--
                that.VformWrong.auth_code.sendtext = that.VformWrong.auth_code.count.toString() + "后重新获取"
              } else {

                that.VformWrong.auth_code.sendtext = "获取验证码"
                that.VformWrong.auth_code.sendtime = null
              }
            }, 1000)
          }
        }, function (response) {
          console.log(response)
          that.VformWrong.email.show = true
          that.VformWrong.email.text = "该邮箱不符合认证要求"
        })
      }
    },
    VformSubmit() {
      this.check_Vform()
      var that = this
      if (that.VformWrong.real_name.show == true)
        return
      if (that.VformWrong.student_id.show == true)
        return
      if (that.VformWrong.email.show == true)
        return
      if (that.VformWrong.auth_code.show == true)
        return
      var ret = {
        'real_name': that.Vform.real_name,
        'student_id': that.Vform.student_id,
        'email': that.Vform.email,
        'auth_code': that.Vform.auth_code,
      }
      console.log(ret)
      axios({
        method: 'post',
        url: '/api/v1.1/user/verify',
        data: ret,
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then(function (response) {
        console.log(response)
        that.to_index()
      }, function (response) {
        console.log(response)
      })
    },

    login_out() {
      this.user = {};
      this.act = {};
      this.team = {};
      window.location.href = "./login";
    },
  },
  created() {

    this.get_url()
    this.init()


  },


}
</script>

<style scoped>
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

#person {
  height: 100%;
}

.index {
  height: 100%;
}

.body {
  height: 100%;
  text-align: center;
}

.head {

  width: 100%;
  /* height: 100px; */
  height: 15%;
  background-color: white;
  text-align: center;
  padding-top: 30px;
  display: flex;
  flex-direction: row;
}

.meImage {

  margin: auto;
  margin-top: 5px;
  width: 70px;

  height: 70px;
  background-color: #DCDCDC;
  border-radius: 50%;

  /*border: 5px solid rgb(247, 217, 250);*/

}

.meImage img {
  border-radius: 50%;
}

.info {
  display: flex;
  flex-direction: column;
  margin-left: -20px;

  text-align: left;

}


.name {
  font-size: 22px;
  font-weight: bold;
}

.id {
  margin: 5px 0;
  font-size: 14px;
  margin-top: -4px;
}

.address {
  margin: 5px 0;
  font-size: 14px;
}

.moreInfo {
  margin: auto;
  height: 30px;
  width: 80px;
  border-radius: 15px;
  border-width: 1px;

}

.medium {
  display: flex;
  flex-direction: row;
  /*height: 80px;*/
  height: 13%;
  color: rgb(128, 128, 128);
  padding-left: 7%;
  padding-right: 7%;
}

.participate {
  margin-left: 5%;
  margin-right: 5%;

}


.circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f0f4ff;
  margin: auto;
  border-width: 2px;
  border-style: solid;
}

.circleBorder {

  border: 4px solid navy;
}


.bodyout {
  margin: 0 auto;
  background-color: #f0f4ff;
  height: 67%;
  padding-top: 5px;
  padding-bottom: 5px;

}

.regulations{
  background: white;
  height: 62%;
  margin-top: 30px;
  padding-top: 10px;
}
.regulation {
  display: flex;
  margin-top: 15px;
}

.regulationImg {
  margin-left: 20px;
}

.regulationTitle {
  margin-left: 10px;
  height: 40px;
  border-bottom: 1px dotted;
  width: 70%;
  text-align: left;
  padding-left: 40px;
}
.last{
  border:0;
}

.guider {
  height: 13%;
  z-index: 20;
  position: sticky;
  bottom: 0px;
  background-color: white;

}

.guiderButton {
  border-style: none;
  background-color: white;
  margin-left: 8%;
  margin-right: 8%;
  margin-top: 20px;
}

.guiderText {
  font-family: " Lucida Grande";
  font-size: 2px;

}


.cicleText {
  font-size: 10px;
  margin-top: 5px;
}


.formHead {
  height: 80px;
  background-color: #f0f4ff;

  display: -webkit-flex;
  display: flex;
}

.formText {
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 10px;
  position: relative;
  margin-top: 40px;
  left: 22%;
  color: black

}

.formBack {
  position: relative;
  font-size: 32px;
  font-weight: 400;
  border-style: none;
  background-color: #f0f4ff;
  margin-left: 5%;
  margin-top: 30px;
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


.form {
  margin-top: 40px;
}

.formBlock {
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

.formIntroduce {

  font-size: 20px;
}

.formInputForm {
  margin-left: 10px;
  width: 72%;

  border-color: white;
  border-width: 0px;
  border-style: none

}


.submitRegister {
  position: relative;
  width: 60%;
  height: 40px;
  background-color: #adadff;
  color: white;
  border-radius: 25px;
  border-style: none;
  left: 20%;
  margin-top: 40px;
  font-size: 20px;
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

.formSend {
  border-left-style: solid;
  border-left-color: grey;
  border-left-width: 1px;
  color: grey;
  font-size: 16px;
  padding-left: 4%;
  padding-bottom: 5px;
  margin-bottom: 5px;

}

</style>
