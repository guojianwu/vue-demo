<template>
  <div class="hello">
    <button type="button" class="copy-button" v-clipboard:copy="'http://localhost:8082/#/'" v-clipboard:success="handleCopyUrl" v-clipboard:error="handleCopyUrlErr">复制链接</button>
    <div class="candle">
      <ve-candle :data="chartData9"></ve-candle>
    </div>
    <div class="scatter">
      <ve-scatter :data="chartData8"></ve-scatter>
    </div>
    <div class="radar">
      <ve-radar :data="chartData7"></ve-radar>
    </div>
    <div class="ring">
      <ve-ring :data="chartData6"></ve-ring>
    </div>
    <div class="line">
      <ve-line :data="chartData5"></ve-line>
    </div>
    <div class="histogram">
      <ve-histogram :data="chartData4"></ve-histogram>
    </div>
    <div class="bar">
      <ve-bar :data="chartData3"></ve-bar>
    </div>
    <div class="map">
      <ve-map :data="chartData"></ve-map>
    </div>
    <div class="pie">
      <ve-pie :data="chartData2"></ve-pie>
    </div>
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  data() {
    return {
      chartData9: {
        columns: ["date", "open", "close", "lowest", "highest", "vol"],
        rows: [
          {
            date: "2004-01-05",
            open: 10411.85,
            close: 10544.07,
            lowest: 10411.85,
            highest: 10575.92,
            vol: 221290000
          },
          {
            date: "2004-01-06",
            open: 10543.85,
            close: 10538.66,
            lowest: 10454.37,
            highest: 10584.07,
            vol: 191460000
          },
          {
            date: "2004-01-07",
            open: 10535.46,
            close: 10529.03,
            lowest: 10432.12,
            highest: 10587.55,
            vol: 225490000
          },
          {
            date: "2004-01-08",
            open: 10530.07,
            close: 10592.44,
            lowest: 10480.59,
            highest: 10651.99,
            vol: 237770000
          },
          {
            date: "2004-01-09",
            open: 10589.25,
            close: 10458.89,
            lowest: 10420.52,
            highest: 10603.48,
            vol: 223250000
          },
          {
            date: "2004-01-12",
            open: 10461.55,
            close: 10485.18,
            lowest: 10389.85,
            highest: 10543.03,
            vol: 197960000
          },
          {
            date: "2004-01-13",
            open: 10485.18,
            close: 10427.18,
            lowest: 10341.19,
            highest: 10539.25,
            vol: 197310000
          },
          {
            date: "2004-01-14",
            open: 10428.67,
            close: 10538.37,
            lowest: 10426.89,
            highest: 10573.85,
            vol: 186280000
          },
          {
            date: "2004-01-15",
            open: 10534.52,
            close: 10553.85,
            lowest: 10454.52,
            highest: 10639.03,
            vol: 260090000
          },
          {
            date: "2004-01-16",
            open: 10556.37,
            close: 10600.51,
            lowest: 10503.71,
            highest: 10666.88,
            vol: 254170000
          },
          {
            date: "2004-01-20",
            open: 10601.42,
            close: 10528.66,
            lowest: 10447.92,
            highest: 10676.96,
            vol: 224300000
          },
          {
            date: "2004-01-21",
            open: 10522.77,
            close: 10623.62,
            lowest: 10453.11,
            highest: 10665.72,
            vol: 214920000
          },
          {
            date: "2004-01-22",
            open: 10624.22,
            close: 10623.18,
            lowest: 10545.03,
            highest: 10717.41,
            vol: 219720000
          },
          {
            date: "2004-01-23",
            open: 10625.25,
            close: 10568.29,
            lowest: 10490.14,
            highest: 10691.77,
            vol: 234260000
          },
          {
            date: "2004-01-26",
            open: 10568.12,
            close: 10702.51,
            lowest: 10510.44,
            highest: 10725.18,
            vol: 186170000
          },
          {
            date: "2004-01-27",
            open: 10701.11,
            close: 10609.92,
            lowest: 10579.33,
            highest: 10748.81,
            vol: 206560000
          },
          {
            date: "2004-01-28",
            open: 10610.07,
            close: 10468.37,
            lowest: 10412.44,
            highest: 10703.25,
            vol: 247660000
          },
          {
            date: "2004-01-29",
            open: 10467.41,
            close: 10510.29,
            lowest: 10369.92,
            highest: 10611.56,
            vol: 273970000
          },
          {
            date: "2004-01-30",
            open: 10510.22,
            close: 10488.07,
            lowest: 10385.56,
            highest: 10551.03,
            vol: 208990000
          },
          {
            date: "2004-02-02",
            open: 10487.78,
            close: 10499.18,
            lowest: 10395.55,
            highest: 10614.44,
            vol: 224800000
          },
          {
            date: "2004-02-03",
            open: 10499.48,
            close: 10505.18,
            lowest: 10414.15,
            highest: 10571.48,
            vol: 183810000
          },
          {
            date: "2004-02-04",
            open: 10503.11,
            close: 10470.74,
            lowest: 10394.81,
            highest: 10567.85,
            vol: 227760000
          },
          {
            date: "2004-02-05",
            open: 10469.33,
            close: 10495.55,
            lowest: 10399.92,
            highest: 10566.37,
            vol: 187810000
          },
          {
            date: "2004-02-06",
            open: 10494.89,
            close: 10593.03,
            lowest: 10433.74,
            highest: 10634.81,
            vol: 182880000
          },
          {
            date: "2004-02-09",
            open: 10592.41,
            close: 10579.03,
            lowest: 10433.72,
            highest: 10634.81,
            vol: 160720000
          },
          {
            date: "2004-02-10",
            open: 10578.74,
            close: 10613.85,
            lowest: 10511.18,
            highest: 10667.03,
            vol: 160590000
          },
          {
            date: "2004-02-11",
            open: 10605.48,
            close: 10737.72,
            lowest: 10561.55,
            highest: 10779.41,
            vol: 277850000
          },
          {
            date: "2004-02-12",
            open: 10735.18,
            close: 10694.07,
            lowest: 10636.44,
            highest: 10775.03,
            vol: 197560000
          },
          {
            date: "2004-02-13",
            open: 10696.22,
            close: 10627.85,
            lowest: 10578.66,
            highest: 10755.47,
            vol: 208340000
          },
          {
            date: "2004-02-17",
            open: 10628.88,
            close: 10714.88,
            lowest: 10628.88,
            highest: 10762.07,
            vol: 169730000
          },
          {
            date: "2004-02-18",
            open: 10706.68,
            close: 10671.99,
            lowest: 10623.62,
            highest: 10764.36,
            vol: 164370000
          },
          {
            date: "2004-02-19",
            open: 10674.59,
            close: 10664.73,
            lowest: 10626.44,
            highest: 10794.95,
            vol: 219890000
          },
          {
            date: "2004-02-20",
            open: 10666.29,
            close: 10619.03,
            lowest: 10559.11,
            highest: 10722.77,
            vol: 220560000
          },
          {
            date: "2004-02-23",
            open: 10619.55,
            close: 10609.62,
            lowest: 10508.89,
            highest: 10711.84,
            vol: 229950000
          },
          {
            date: "2004-02-24",
            open: 10609.55,
            close: 10566.37,
            lowest: 10479.33,
            highest: 10681.41,
            vol: 225670000
          },
          {
            date: "2004-02-25",
            open: 10566.59,
            close: 10601.62,
            lowest: 10509.42,
            highest: 10660.73,
            vol: 192420000
          },
          {
            date: "2004-02-26",
            open: 10598.14,
            close: 10580.14,
            lowest: 10493.71,
            highest: 10652.96,
            vol: 223230000
          },
          {
            date: "2004-02-27",
            open: 10581.55,
            close: 10583.92,
            lowest: 10519.03,
            highest: 10689.55,
            vol: 200050000
          }
        ]
      },
      chartData8: {
        columns: ["date", "PV", "order", "age"],
        rows: [
          { date: "1/1", PV: 123, age: 3, order: 1244 },
          { date: "1/2", PV: 1223, age: 6, order: 2344 },
          { date: "1/3", PV: 7123, age: 9, order: 3245 },
          { date: "1/4", PV: 4123, age: 12, order: 4355 },
          { date: "1/5", PV: 3123, age: 15, order: 4564 },
          { date: "1/6", PV: 2323, age: 20, order: 6537 }
        ]
      },
      chartData7: {
        columns: ["date", "cost", "profit", "growthRate", "people"],
        rows: [
          {
            date: "01/01",
            cost: 1523,
            profit: 1523,
            growthRate: 0.12,
            people: 100
          },
          {
            date: "01/02",
            cost: 1223,
            profit: 1523,
            growthRate: 0.345,
            people: 100
          },
          {
            date: "01/03",
            cost: 2123,
            profit: 1523,
            growthRate: 0.7,
            people: 100
          },
          {
            date: "01/04",
            cost: 4123,
            profit: 1523,
            growthRate: 0.31,
            people: 100
          },
          {
            date: "01/05",
            cost: 3123,
            profit: 1523,
            growthRate: 0.12,
            people: 100
          },
          {
            date: "01/06",
            cost: 7123,
            profit: 1523,
            growthRate: 0.65,
            people: 100
          }
        ]
      },
      chartData6: {
        columns: ["date", "cost", "profit"],
        rows: [
          { date: "01/01", cost: 123, profit: 3 },
          { date: "01/02", cost: 1223, profit: 6 },
          { date: "01/03", cost: 2123, profit: 90 },
          { date: "01/04", cost: 4123, profit: 12 },
          { date: "01/05", cost: 3123, profit: 15 },
          { date: "01/06", cost: 7123, profit: 20 }
        ]
      },
      chartData5: {
        columns: ["date", "cost", "profit", "growthRate", "people"],
        rows: [
          {
            cost: 1523,
            date: "01/01",
            profit: 1523,
            growthRate: 0.12,
            people: 100
          },
          {
            cost: 1223,
            date: "01/02",
            profit: 1523,
            growthRate: 0.345,
            people: 100
          },
          {
            cost: 2123,
            date: "01/03",
            profit: 1523,
            growthRate: 0.7,
            people: 100
          },
          {
            cost: 4123,
            date: "01/04",
            profit: 1523,
            growthRate: 0.31,
            people: 100
          },
          {
            cost: 3123,
            date: "01/05",
            profit: 1523,
            growthRate: 0.12,
            people: 100
          },
          {
            cost: 7123,
            date: "01/06",
            profit: 1523,
            growthRate: 0.65,
            people: 100
          }
        ]
      },
      chartData4: {
        columns: ["date", "cost", "profit", "growthRate", "people"],
        rows: [
          {
            cost: 1523,
            date: "01/01",
            profit: 1523,
            growthRate: 0.12,
            people: 100
          },
          {
            cost: 1223,
            date: "01/02",
            profit: 1523,
            growthRate: 0.345,
            people: 100
          },
          {
            cost: 2123,
            date: "01/03",
            profit: 1523,
            growthRate: 0.7,
            people: 100
          },
          {
            cost: 4123,
            date: "01/04",
            profit: 1523,
            growthRate: 0.31,
            people: 100
          }
        ]
      },
      chartData3: {
        columns: ["date", "cost", "profit"],
        rows: [
          { date: "01/01", cost: 123, profit: 3 },
          { date: "01/02", cost: 1223, profit: 6 },
          { date: "01/03", cost: 2123, profit: 90 },
          { date: "01/04", cost: 4123, profit: 12 },
          { date: "01/05", cost: 3123, profit: 15 },
          { date: "01/06", cost: 7123, profit: 20 }
        ]
      },
      chartData: {
        columns: ["location", "GDP"],
        rows: [
          { location: "吉林", GDP: 123, person: 123, area: 92134 },
          { location: "北京", GDP: 1223, person: 2123, area: 29234 },
          { location: "上海", GDP: 2123, person: 1243, area: 94234 },
          { location: "浙江", GDP: 4123, person: 5123, area: 29234 }
        ]
      },
      chartData2: {
        columns: ["date", "cost", "profit"],
        rows: [
          { date: "01/01", cost: 123, profit: 3 },
          { date: "01/02", cost: 1223, profit: 6 },
          { date: "01/03", cost: 2123, profit: 90 },
          { date: "01/04", cost: 4123, profit: 12 },
          { date: "01/05", cost: 3123, profit: 15 },
          { date: "01/06", cost: 7123, profit: 20 }
        ]
      }
    };
  },
  methods:{
    handleCopyUrl(){
      console.log("复制成功")
    },
    handleCopyUrlErr(){
      console.log("复制失败")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bar {
  /* width: 80vw; */
}
.map {
  width: 500px;
}
</style>
