
// class Scene {
//   constructor() {
//     this.init()
//   }
//   init() {
//     this.update()
//   }
//   drawRect() {
//     let w = 6, h = 12
//     for (let i = 0; i < 12; i++) {
//       let x = 180 * Math.cos(i * 360/12 * Math.PI / 180)
//       let y = 180 * Math.sin(i * 360/12 * Math.PI / 180)
//       ctx.save()
//       ctx.translate(cx + x, cy + y)
//       ctx.rotate((i * 360/12 + 90) * Math.PI / 180)
//       ctx.beginPath()
//       ctx.fillStyle = '#b70d0d'
//       ctx.fillRect(0 - w/2, 0, w, h)
//       ctx.font="24px Verdana";
//       ctx.fillStyle = '#272727'
//       ctx.fillText((i + 2) % 12 + 1, -10, 40)
//       ctx.restore()
//     }    
//   }
//   drawPoint() {
//     ctx.fillStyle = '#a3a3a3'
//     for (let i = 0; i < 60; i++) {
//       let x = 170 * Math.sin(i * 360/60 * Math.PI / 180)
//       let y = 170 * Math.cos(i * 360/60 * Math.PI / 180)
//       ctx.beginPath()
//       ctx.arc(x + cx, y + cy, 3, 0, 2*3.14)
//       ctx.fill()
//     }
//   }
//   drawPane() {
//     ctx.beginPath()
//     ctx.fillStyle = '#ff1515'
//     ctx.arc(cx, cy, 200, 0, 6.28)
//     ctx.fill()
//     ctx.beginPath()
//     ctx.fillStyle = '#b70d0d'
//     ctx.arc(cx, cy, 190, 0, 2*3.14)
//     ctx.fill()
//     ctx.beginPath()
//     ctx.fillStyle = '#fff'
//     ctx.arc(cx, cy, 180, 0, 6.28)
//     ctx.fill()
//   }
//   drawPane2() {
//     ctx.beginPath()
//     ctx.fillStyle = '#e98778'
//     ctx.arc(cx, cy, 10, 0, 6.28)
//     ctx.fill()
//     ctx.beginPath()
//     ctx.fillStyle = '#eebab3'
//     ctx.arc(cx, cy, 8, 0, 2*3.14)
//     ctx.fill()
//     ctx.beginPath()
//     ctx.fillStyle = '#c24739'
//     ctx.arc(cx, cy, 3, 0, 6.28)
//     ctx.fill()
//   }
//   /**
//    * 
//    * @param {number} num 当前的秒数 0 -> 
//    * 秒360 360/60, -> 分360/60 /60
//    * 60 360
//    * 1 6
//    * 360 6
//    * 6 36/360
//    */
//   drawSec(num) {
//     let w = 4, h = 120
//     ctx.save()
//     ctx.translate(cx, cy)
//     ctx.rotate((num * 360/60 + 180) * Math.PI / 180)
//     ctx.beginPath()
//     ctx.fillStyle = '#de6655'
//     ctx.fillRect(0 - w/2, 0, w, h)
//     ctx.restore()    
//   }
//   /**
//    * @param {number} num 当前时刻分钟数 + 秒的偏移值
//    */
//   drawMin(min, sec) {
//     let w = 4, h = 100
//     ctx.save()
//     ctx.translate(cx, cy)
//     ctx.rotate((min * 360/60 + 180 + sec/10) * Math.PI / 180)
//     ctx.beginPath()
//     ctx.fillStyle = '#666665'
//     ctx.fillRect(0 - w/2, 0, w, h)
//     ctx.restore()    
//   }
//   /**
//    * 
//    * @param {*} min 
//    * @param {*} sec 
//    * @param {*} hour 
//    * 
//    * 分 360 60min
//    * 时 360/12 
//    * 分 6 1min
//    * 时 360/12/60 = 0.5
//    */
//   drawHour(min, sec, hour) {
//     let w = 4, h = 80
//     ctx.save()
//     ctx.translate(cx, cy)
//     ctx.rotate((hour * 360/12 + 180 + (min + sec/60)/2) * Math.PI / 180)
//     ctx.beginPath()
//     ctx.fillStyle = '#666665'
//     ctx.fillRect(0 - w/2, 0, w, h)
//     ctx.restore()    
//   }
//   render() {
//     ctx.clearRect(0, 0, 400, 400)
//     let d = new Date()
//     let sec = d.getSeconds()
//     let min = d.getMinutes()
//     let hour = d.getHours()
//     this.drawPane()
//     this.drawPoint()
//     this.drawRect()
//     this.drawHour(min, sec, hour)
//     this.drawMin(min, sec)
//     this.drawSec(sec)
//     this.drawPane2()
//   }
//   update() {
//     this.render()
//     requestAnimationFrame(this.update.bind(this))
//   }
// }