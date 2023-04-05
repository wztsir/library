<template>
  <div class="body">
    <div id="activity">
      <div class="head" v-show="!indexshow">
        <div class="headindex">
          <div id="logo" class="logo">
            <h1>Notice</h1>
          </div>
          <div id="search" class="search">
            <input class="searchInput" type="text" id="in" placeholder="Please enter the announcement time"/>
            <button class="searchButton" onclick="showInput()">Search</button>
          </div>
        </div>

      </div>
      <div class="infoindex" v-show="indexshow">
        <button class="backButton" @click="back_information">{{ '<' }}</button>
        <div class="infoheadText">Notice Detail</div>
      </div>
      <div class="activityBo" v-show="!indexshow">
        <ul>
          <div class="activity" @click="to_information(6)" >
            <div class="activityUp">
              <div class="activityImage">
                <img src="../assets/img/building.jpg" style="width:133px; height:120px;">
              </div>
              <div class="activityText">
                <div class="textUPtwo">
                  <h5 class="textName">Winter Holiday Opening</h5>
                  <h5 class="textDescribe">
                    1. Opening date: January 4-6, January 9-13, January 16-20, January 30-February 3, February 6-10, February ...
                  </h5>
                </div>
                <div>
                  <h6 class="textTime">Deadline: 2023-2-17</h6>
                </div>
              </div>

            </div>

          </div>
          <div class="activity" @click="to_information(6)" >
            <div class="activityUp">
              <div class="activityImage">
                <img src="../assets/img/library.jpg" style="width:133px; height:120px;">
              </div>
              <div class="activityText">
                <div class="textUPtwo">
                  <h5 class="textName">Recruitment</h5>
                  <h5 class="textDescribe">Post nature: fixed post Recruitment number: 3
                    Work location:
                    University Town Campus Library
                    job... </h5>
                </div>
                <div>
                  <h6 class="textTime">Deadline: 2023-02-20</h6>
                </div>
              </div>

            </div>
            <div class="activityDown">

            </div>
          </div>

          <div class="activity" @click="to_information(item.card_id)" v-for="(item,index) in act" :key="index">
            <div class="activityUp">
              <div class="activityImage">
                <img src="">
              </div>
              <div class="activityText">
                <div class="textUPtwo">
                  <h5 class="textName">{{ item.title }}</h5>
                  <h5 class="textDescribe">{{ item.describe }}</h5>
                </div>
                <div>
                  <h6 class="textTime">截止时间:{{ item.deadline }}</h6>
                </div>
              </div>

            </div>

          </div>

        </ul>
      </div>
      <div class="activityInfoBo" v-show="indexshow">
        <div class="activityInfoBoin">
          <div class="activityImageInfo">
            <img src="../assets/img/library.jpg" style="width:100%; height:100%;border-radius: 20px;">
          </div>
          <div class="activityInfoTitle">Recruit</div>
          <div class="activityInfoStar">Views： 43634 Favorites： 324</div>

          <div class="activityInfoTime">Deadline: 2023-02-20</div>
          <div class="activityInfoText">Notice Details:</div>
          <div class="activityInfoDiscribeBo">
            <div class="activityInfoDiscribe">
              Post nature: fixed post
              Recruitment number: 3
              Work location:
              University Town Campus Library
              job content:Library daily affairs
              Grade requirements:Freshman
              Time requirement:
              Fifth floor: free in the morning and afternoon
              Telereading room: available on Monday evening and Wednesday morning
              Copy room: available on Wednesday morning
              Other requirements:
              The copy room assistant needs to be interviewed
            </div>
          </div>
        </div>
      </div>
      <div class="activityInfoBo" v-show="indexshow">
        <div class="activityInfoBoin">
          <div class="activityImageInfo">

          </div>
          <div class="activityInfoTitle">{{ nowtitle }}</div>
          <div class="activityInfoStar">浏览量： {{ share }} 收藏量： {{ star }}</div>

          <div class="activityInfoTime">截止时间： {{ nowtime }}</div>
          <div class="activityInfoText">公告详情:</div>
          <div class="activityInfoDiscribeBo">
            <div class="activityInfoDiscribe">{{ nowdiscribe }}</div>
          </div>
        </div>
      </div>

      <div class="guider" v-show="!indexshow">
        <div class="guiderJump">
          <button class="guiderButton">
            <img src="../assets/img/gid_uni.png" width="25" height="25" @click="toActivity">
            <div class="guiderText">notice</div>
          </button>
          <button class="guiderButton">
            <img src="../assets/img/gid_map.png" width="25" height="25" @click="toAppointment">
            <div class="guiderText">appointment</div>
          </button>
          <button class="guiderButton">
            <img src="../assets/img/gid_my.png" width="25" height="25" @click="toPerson">
            <div class="guiderText">me</div>
          </button>

        </div>
      </div>
      <div class="guider" v-show="indexshow">
        <div class="gudierInfo" v-show="indexshow">
          <button class="guiderButtonDetail" >
            <img src="../assets/img/gid_jump.png" width="25" height="25">
            <div class="guiderText">share</div>
          </button>
          <button class="guiderButtonDetail">
            <img src="../assets/img/gid_star.png" width="25" height="25">
            <div class="guiderText">favorite</div>
          </button>
          <button class="InvButton" :style="styleO" @click="join_activity">
            <!--            {{ nowAText }}-->
            login
          </button>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  el: '#activity', //el用于制定当前Vue实例为哪个容器，值通常为CSS选择器字符串
  data() {
    return {
      user_id: -1,

      act: [],
      nowtitle: "none",
      nowtime: "none",
      star: 0,
      share: 0,
      nowAText: "立即报名",
      styleO: {},
      is_join: 0,
      nowdiscribe: "none",
      nowimageURL: "",
      nowtag: [],

      indexshow: false,
      now_activity: -1,
      back_to_person: false,


      act_information: [],
      attend_activity: [],
    }

  },
  methods: {

    get_url: function () {
      let url = window.location.search
      url = url.split('?')
      this.user_id = url[1]
      if (this.user_id == "undefined")
        this.user_id = undefined
      if (url[2] != undefined) {
        this.now_activity = Number(url[2])
        this.back_to_person = true
        this.attend_activity.push(this.now_activity)
        this.to_information(this.now_activity)
        this.indexshow = true
      } else {
        this.init()
        this.init_team()
        this.rebuttom()
        console.log(this.attend_activity)
      }

    },
    rebuttom: function () {
      var that = this
      if (that.user_id == undefined) {
        this.styleO.backgroundColor = "#E0E0E0"
        this.styleO.borderStyle = "none"
        this.styleO.color = "black"
        this.nowAText = "请登录后报名"
      } else {
        if (this.is_join == 0) {
          this.styleO.backgroundColor = "#ebebfc"
          this.styleO.borderStyle = "solid"
          this.styleO.color = "navy"
          this.nowAText = "立即报名"
        } else {
          this.styleO.backgroundColor = "#fdd6d6"
          this.styleO.borderStyle = "none"
          this.styleO.color = "#990000"
          this.nowAText = "取消报名"

        }
      }
    },

    toActivity: function () {
      window.location.href = "./activity" + '?' + this.user_id

    },
    toOrganize: function () {
      window.location.href = "./organize" + '?' + this.user_id

    },
    toAppointment: function () {
      window.location.href = "./appointment" + '?' + this.user_id

    },

    toPerson: function () {
      var that = this

      if (that.user_id == undefined)

        window.location.href = "./login"
      else
        window.location.href = "./person" + '?' + this.user_id

    },
    init: function () {
      var that = this

      axios.get("/api/v1.1/team/list").then(function (response) {
        console.log(response)
        that.act = response.data.data
        var len = that.act.length

        for (var i = 0; i < len; i++) {
          that.act[i].tag = that.act[i].subject_heading.split(',')
          if (that.act[i].introduction.length <= 130)
            that.act[i].describe = that.act[i].introduction
          else
            that.act[i].describe = that.act[i].introduction.slice(0, 130) + "..."
        }

      }, function () {
      })
    },
    init_team: function () {
      var that = this


      if (that.user_id != undefined)
        axios.get("/api/v1.1/user/" + that.user_id + "/team/join").then(function (response) {
          var len = response.data.data.length
          for (var i = 0; i < len; i++) {
            that.attend_activity.push(response.data.data[i].card_id)
          }
        }, function () {
        })

    },
    to_information: function (card_id) {
      var that = this

      that.now_activity = card_id
      that.indexshow = true
      var len = that.attend_activity.length
      for (var i = 0; i < len; i++) {
        if (that.attend_activity[i] == card_id)
          that.is_join = 1
      }
      that.rebuttom()
      axios.get("/api/v1.1/team/" + card_id.toString()).then(function (response) {
        that.nowtitle = response.data.data.title
        that.nowtime = response.data.data.deadline
        that.star = response.data.data.card_favorites
        that.share = response.data.data.card_views
        that.nowimageURL = response.data.data.image_path
        that.nowdiscribe = response.data.data.introduction
        that.nowtag = response.data.data.subject_heading.split(',')

      }, function (response) {
        console.log(response)
      })
    },
    join_activity: function () {
      var that = this
      var method = 'put'
      if (that.is_join == 1)
        method = 'delete'

      var url = "/api/v1.1/user/" + this.user_id + "/team/join"
      if (that.user_id != undefined){
        axios({

          method: method,
          url: url,
          data: {
            "card_id": that.now_activity,
          },
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function () {
          console.log("操作成功")
          that.is_join = 1 - that.is_join
          that.rebuttom()
        })
      }
      else{
        window.location.href = "./login";
      }

    },
    back_information: function () {
      var that = this
      that.indexshow = false
      if (that.back_to_person == true)
        window.location.href = "./person" + '?' + this.user_id
      else
        that.indexshow = false
    },
  },
  created() {
    //i=this.act.length

    this.get_url()


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

.body {
  text-align: center;
}

.activity {
  margin-left: -15px;
  border-radius: 15px;
  margin-bottom: -5px;
  width: 100%;
  height: 200px;


}

.activityUp {
  width: 100%;
  height: 150px;
  background-color: white;
  display: -webkit-flex;
  display: flex;
  border-radius: 15px 15px 0px 0px;
}

.activityDown {
  display: -webkit-flex;
  display: flex;
  width: 100%;
  height: 25px;
  background-color: white;
  border-radius: 0px 0px 15px 15px;
}

.acitvityTagList {
  margin-top: -5px;
  margin-left: -30px;

  display: -webkit-flex;
  display: flex;
}

.backButton {
  margin-top: 30px;
  margin-bottom: 2px;
  position: absolute;

  width: 80px;
  height: 30px;
  border-style: none;


  color: #000080;
  background-color: white;
  font-family: "sans-serif";
  font-weight: 800;
  font-size: 30px;
  left: -15px;

}

.activityJoinButton:hover {
  background-color: #f0f4ff;
}

.activityTag {
  margin-top: -5px;
  margin-left: 5px;
  margin-right: 5px;
  padding-bottom: 10px;

  width: 80px;
  height: 18px;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  border-color: #9999FF;
  border-radius: 10px;
  line-height: 30px;

  background-color: white;
}

.activityTagText {
  color: #6666FF;

  font-size: 8px;
  margin: auto;
}

.activityText {
  width: 400px;
  padding-left: 10px;

}

.activityImage {
  margin-top: 15px;
  margin-left: 15px;
  border-radius: 10px;
  width: 300px;
  height: 120px;
  background-color: #eeeded;
}

.activityBo {
  width: 100%;
  background-color: #f0f4ff;
  text-align: center;
  margin: auto;


  padding-top: 5px;
}

.head {
  height: 140px;
  z-index: 20;
  position: sticky;
  top: 0;
  background-color: white;

}

.logo {
  color: navy;
  font-size: 18px;
}


.InvButton {
  border-width: 1px;
  height: 40px;
  width: 160px;

  margin-left: 20px;
  border-color: #9999FF;
  border-radius: 20px;


  font-family: " Lucida Grande";
  font-size: 9px;
}

.searchButton {
  border-width: 1px;
  height: 30px;
  width: 80px;
  color: navy;
  border-color: #9999FF;
  border-radius: 20px;
  border-style: solid;
  background-color: #f0f4ff;

  font-family: " Lucida Grande";
  font-size: 9px;
}

.searchButton:hover {
  background-color: #9999FF;
}

.searchInput {
  text-align: center;
  border-width: 1px;
  height: 30px;
  width: 240px;
  border-color: #9999FF;
  background-color: #f0f4ff;
  border-radius: 20px;
  border-style: solid;
  margin-right: 20px;

  font-family: " Lucida Grande";
  font-size: 9px;
}

.textName {
  text-align: left;
  margin-top: 10px;
}

.textDescribe {
  text-align: left;
  font-size: 6px;
  font-weight: 500;
  margin-top: -20px;
  color: #808080;
}

.textUPtwo {
  background-color: white;
  height: 140px;

}

.textTime {
  margin-top: -30px;
  margin-bottom: 5px;
  text-align: left;
  color: #808080;
  font-size: 1px;
  font-weight: 400;
}

.guider {
  height: 87.5px;
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

.guiderButton:hover {
  color: #6666FF

}
.guiderButtonDetail{
  border-style: none;
  background-color: white;

  margin-top: 20px;
  margin-left: 6%;
  margin-right: 6%;
}

.activityInfoBo {
  width: 100%;
  background-color: #f0f4ff;
  padding-top: 10px;
  height: 800px;
}

.infoindex {
  height: 80px;
  display: -webkit-flex;
  background-color: white;
  display: flex;
  z-index: 20;
  position: sticky;
  top: 0;
}

.infoheadText {
  margin-top: 40px;
  margin-left: 40%;
  font-size: 20px;
  color: #000080;

}

.activityInfoBoin {
  background-color: white;
  width: 100%;
  padding-top: 10px;
}

.activityImageInfo {
  margin-left: 5%;
  border-radius: 20px;
  width: 90%;
  height: 200px;
  background-color: #DCDCDC;

}

.activityInfoTitle {
  font-size: 26px;
  margin-top: 10px;
  margin-left: 5%;
  text-align: left;

}

.activityInfoStar {
  font-size: 12px;
  margin-top: 5px;
  margin-left: 5%;
  color: grey;
  text-align: left;
}

.activityInfoTagBo {
  display: -webkit-flex;
  display: flex;
  margin-left: 5%;
}

.activityInfoTag {
  margin-top: 5px;

  margin-right: 10px;
  padding-bottom: 10px;

  width: 80px;
  height: 9px;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  border-color: #ebebfc;
  border-radius: 10px;

  background-color: #f0f4ff;
}

.activityInfoTagText {
  font-size: 9px;
  font-weight: 400;
  margin-top: 0px;
  color: #9999FF;
}

.activityInfoTime {
  margin-top: 6px;
  font-size: 12px;
  font-weight: 400;
  margin-left: 5%;
  text-align: left;
}

.activityInfoText {
  font-size: 18px;
  margin-left: 5%;
  margin-top: 5px;
  text-align: left;
}

.activityInfoDiscribeBo {
  width: 90%;
  margin-left: 5%;
  margin-top: 10px;
  padding-bottom: 20px;
}

.activityInfoDiscribe {
  text-align: justify;
  padding: 15px;
  width: 96%;
  font-size: 16px;
  font-weight: 450;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: #f0f4ff;
  row-span: 10;
}
</style>