<template>
  <div id="person">
    <el-row class="tac">

      <el-col :span="12" class="body" style="display: flex">
        <!--        <h5 width="100%">自定义颜色</h5>-->
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo browse_box"
            @open="handleOpen"
            @close="handleClose"
            background-color="#dee7ff"
            text-color="#808080"
            active-text-color="#9999ff"
            style="width: 60%;right: 13%;height: 100%;font-size: 30px"

        >
          <el-menu-item  style="margin-top: 5px">
            <i class="el-icon-menu"></i>
            <span style="font-size: 30px;font-weight: bold;color: navy">Floor</span>

          </el-menu-item>
          <el-menu-item index="1" style="margin-top: 20px">
            <i class="el-icon-menu"></i>
            <span style="font-size: 20px">First</span>

          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span style="font-size: 20px">Second</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span style="font-size: 20px">Third</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span style="font-size: 20px">Fourth</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span style="font-size: 20px">fifth</span>
          </el-menu-item>
        </el-menu>

        <div class="content">
          <div class="table first">
            <img src="../assets/img/seat.png" width="30" height="30">
            <img src="../assets/img/seat_no.png" width="30" height="30">
            <img src="../assets/img/seat.png" width="30" height="30">
            <img src="../assets/img/seat.png" width="30" height="30">
            <img src="../assets/img/seat_person.png" width="30" height="30">
            <img src="../assets/img/seat_person.png" width="30" height="30">
            <img src="../assets/img/seat.png" width="30" height="30">
            <img src="../assets/img/seat.png" width="30" height="30">
          </div>
          <div class="table second">
            <img src="../assets/img/seat_no.png" width="30" height="30">
            <img src="../assets/img/seat.png" width="30" height="30">
            <img src="../assets/img/seat_person.png" width="30" height="30">
            <img src="../assets/img/seat.png" width="30" height="30">
            <img src="../assets/img/seat_no.png" width="30" height="30">
            <img src="../assets/img/seat.png" width="30" height="30">
            <img src="../assets/img/seat_person.png" width="30" height="30">
            <img src="../assets/img/seat_no.png" width="30" height="30">
          </div>
          <div class="table third">
            <img src="../assets/img/seat.png" width="30" height="30">
            <img src="../assets/img/seat.png" width="30" height="30">
            <img src="../assets/img/seat_person.png" width="30" height="30">
            <img src="../assets/img/seat.png" width="30" height="30">
            <img src="../assets/img/seat_no.png" width="30" height="30">
            <img src="../assets/img/seat_no.png" width="30" height="30">
            <img src="../assets/img/seat.png" width="30" height="30">
            <img src="../assets/img/seat_person.png" width="30" height="30">
          </div>
          <div class="table fourth">
            <img src="../assets/img/seat.png" width="30" height="30">
            <img src="../assets/img/seat.png" width="30" height="30">
            <img src="../assets/img/seat.png" width="30" height="30">
            <img src="../assets/img/seat.png" width="30" height="30">
            <img src="../assets/img/seat_no.png" width="30" height="30">
            <img src="../assets/img/seat.png" width="30" height="30">
            <img src="../assets/img/seat.png" width="30" height="30">
            <img src="../assets/img/seat_no.png" width="30" height="30">
          </div>
        </div>


      </el-col>
    </el-row>
    <div class="yuyue" v-show="!indexshow">
      <div class="yuyueTitle">Appoint</div>
      <el-select v-model="select" placeholder="appointment period" style="width: 250px">
        <el-option label="a.m. 08：00-12：00" value="1"></el-option>
        <el-option label="p.m. 12：00-17：00" value="2"></el-option>
        <el-option label="p.m. 17：00-22：00" value="3"></el-option>
      </el-select>
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
</template>

<script>
export default {
  name: "appointmentView.vue",

  components: {},
  // 13829816170
  el: '#person',
  data() {
    return {
      indexshow: false,
      select: "",
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toActivity: function () {
      window.location.href = "./activity" + '?' + 6

    },
    toOrganize: function () {
      window.location.href = "./organize" + '?' + 6

    },
    toAppointment: function () {
      window.location.href = "./appointment" + '?' + 6

    },
    toPerson: function () {
      window.location.href = "./person" + '?' + 6

    },
  }
}
</script>

<style>
#person {
  height: 100%;
}

.body {
  position: relative;
}

.tac {
  height: 100%;
}

.table {
  height: 25%;
  left: 30px;
  top: 30px;
  border: 10px;
  border-color: #521414;
  background: #dee7ff;
  position: relative;
  padding-left: 8px;
  padding-top: 30px;
}

.content {
  width: 500px;
  position: relative;
  top: 35px;
}

.yuyue {
  z-index: 100;
  position: absolute;
  top: 3%;
  width: 250px;
  text-align: center;
  display: flex;
  left: 30%;
}

.yuyueTitle {
  height: 50px;
  width: 100px;

  color: navy;
  font-size: 20px;
}

.first {

}

.second {
  left: 150px;
  top: -165px;
}

.third {
  top: -100px;
}

.fourth {
  left: 150px;
  top: -295px;
}

.guider {
  height: 13%;
  z-index: 20;
  position: sticky;
  bottom: 0px;
  background-color: white;
  text-align: center;

}

.guiderButton {
  border-style: none;
  background-color: white;
  margin-left:8%;
  margin-right: 8%;
  margin-top: 20px;
}

.guiderText {
  font-family: " Lucida Grande";
  font-size: 2px;

}


</style>