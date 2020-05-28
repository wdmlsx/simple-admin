<template>
  <div style="background: #0a76a4">
    <svg
      id="svgContainer"
      :width="svgSize.width ? svgSize.width : 0"
      :height="svgSize.height ? svgSize.height - 4 : 0"
      :viewBox="[0, 0, svgSize.width, svgSize.height]"
    >
      <!--<svg
        id="svgContainer"
      >-->
      <defs>
        <!-- 节点交换机设备的图标 -->
        <symbol id="switch" viewBox="0 0 100 100">
          <path d="M 60 42.1 l -0.9 -0.3 a 1.8 1.8 0 0 1 -0.9 -1.6 V 33.8 a 1.8 1.8 0 0 1 3.7 0 v 3.3 l 13 -7.1 L 61.9 23 v 3.3 A 1.8 1.8 0 0 1 60 28.2 h -7 v 3.7 h 1.7 a 1.8 1.8 0 0 1 0 3.7 H 51.2 a 1.8 1.8 0 0 1 -1.8 -1.8 V 26.4 a 1.8 1.8 0 0 1 1.8 -1.8 h 7 V 20 a 1.8 1.8 0 0 1 2.7 -1.6 l 18.7 10 a 1.8 1.8 0 0 1 0 3.2 L 60.9 41.8 Z M 60 69.2 l -0.9 -0.3 a 1.8 1.8 0 0 1 -0.9 -1.6 V 60.9 a 1.8 1.8 0 0 1 3.7 0 v 3.3 l 13 -7.1 l -13 -6.9 v 3.3 A 1.8 1.8 0 0 1 60 55.3 h -7 V 59 h 1.7 a 1.8 1.8 0 0 1 0 3.7 H 51.2 a 1.8 1.8 0 0 1 -1.8 -1.8 V 53.5 a 1.8 1.8 0 0 1 1.8 -1.8 h 7 V 47.1 a 1.8 1.8 0 0 1 2.7 -1.6 l 18.7 10 a 1.8 1.8 0 0 1 0 3.2 L 60.9 69 Z M 40 54.8 l -0.9 -0.2 L 20.4 44.2 a 1.8 1.8 0 0 1 0 -3.2 L 39.1 31 a 1.8 1.8 0 0 1 2.7 1.6 v 4.5 h 7 A 1.8 1.8 0 0 1 50.6 39 v 7.4 a 1.8 1.8 0 0 1 -1.8 1.8 H 45.2 a 1.8 1.8 0 0 1 0 -3.7 h 1.7 V 40.9 H 40 A 1.8 1.8 0 0 1 38.1 39 V 35.7 l -13 6.9 l 13 7.1 V 46.4 a 1.8 1.8 0 0 1 3.7 0 v 6.5 a 1.8 1.8 0 0 1 -0.9 1.6 Z M 40 81.9 l -0.9 -0.2 L 20.4 71.4 a 1.8 1.8 0 0 1 0 -3.2 l 18.7 -10 a 1.8 1.8 0 0 1 2.7 1.6 v 4.5 h 7 a 1.8 1.8 0 0 1 1.8 1.8 v 7.4 a 1.8 1.8 0 0 1 -1.8 1.8 H 45.2 a 1.8 1.8 0 0 1 0 -3.7 h 1.7 V 68 H 40 a 1.8 1.8 0 0 1 -1.8 -1.8 V 62.9 l -13 6.9 l 13 7.1 V 73.6 a 1.8 1.8 0 0 1 3.7 0 V 80 a 1.8 1.8 0 0 1 -0.9 1.6 Z" />
        </symbol>
        <!-- 节点终端主机的图标 -->
        <symbol id="host" viewBox="0 0 100 100">
          <path d="M75,49.5H25a1.8,1.8,0,0,1-1.8-1.8V27.1A1.8,1.8,0,0,1,25,25.3H75a1.8,1.8,0,0,1,1.8,1.8V47.7A1.8,1.8,0,0,1,75,49.5ZM26.9,45.8H73.1V28.9H26.9V45.8ZM35.5,43.2H30.7a1.8,1.8,0,1,1,0-3.7h4.8A1.8,1.8,0,1,1,35.5,43.2ZM72.1,72.9a1.8,1.8,0,0,1-1.8,1.8H29.7a1.8,1.8,0,1,1,0-3.7H48.2V53.5a1.8,1.8,0,1,1,3.7,0V71.1H70.3A1.9,1.9,0,0,1,72.1,72.9Z" />
        </symbol>
        <symbol id="piperconfTable" viewBox="0 0 110 110">
          <path d="M6.3,5.3h8.5v14.2h-8.5zM95.3,5.3h8.5v14.2h-8.5zM18.5,5.3h15.6v14.2h-15.6zM37.9,5.3h15.6v14.2h-15.6zM57,5.3h15.6v14.2h-15.6zM76.1,5.3h15.6v14.2h-15.6zM6.3,23.9h97.5v80.75h-97.5zM10,66h13v3h-13zM23,62.5L28,67.5L23,72.5zM30,55h12.5v25h-12.5zM45,66h13v3h-13zM58,62.5L63,67.5L58,72.5zM65,55h12.5v25h-12.5zM79,66h15v3h-15zM94,62.5L99,67.5L94,72.5z" />
        </symbol>
      </defs>
    </svg>
  </div>
</template>

<script>
import resize from './mixins/resize'
import * as d3 from 'd3'

import dataAPI from './data/device'

export default {
  name: 'Index',
  mixins: [resize],
  data() {
    return {
      nodes: [],
      links: [],
      interval: {
        rectIntervalShrink: undefined
      }
    }
  },
  created() {
    this.loadResource()
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
      this.keyboardEvent()
    })
  },
  methods: {
    loadResource() {
      this.nodes = dataAPI.deviceList()
      this.links = dataAPI.links()
    },
    keyboardEvent() {
      const that = this
      d3.select('body').on('keydown', function() {
        const key = d3.event.key
        if ((key === 'l' || key === 'L') && !that.interval.rectIntervalShrink) {
          const elText = d3.selectAll('.node').select('text')
          const elRect = d3.selectAll('.node').select('rect')
          if (elText.text()) {
            elText.text(node => '')
            that.interval.rectIntervalShrink = setInterval(() => {
              elRect.attr('width', function(node) {
                const width = d3.select(this).attr('width')
                if (width <= 36) {
                  clearInterval(that.interval.rectIntervalShrink)
                  that.interval.rectIntervalShrink = undefined
                  return 36
                } else {
                  return width - 10
                }
              })
            }, 20)
          } else {
            elText.text(node => node.id)
            that.interval.rectIntervalShrink = setInterval(() => {
              elRect.attr('width', function(node) {
                const width = parseInt(d3.select(this).attr('width'))
                if (width >= 150) {
                  clearInterval(that.interval.rectIntervalShrink)
                  that.interval.rectIntervalShrink = undefined
                  return 150
                } else {
                  return width + 10
                }
              })
            }, 20)
          }
        }
      })
    },
    init() {
      const width = this.$data.svgSize.width
      const height = this.$data.svgSize.height
      const svg = d3.select('#svgContainer')
        .attr('viewBox', [0, 0, width, height])

      const g = svg.append('g').attr('cursor', 'grab')

      g.selectAll('g')
        .data(this.nodes)
        .join('g')
        .attr('id', node => this.generateRectId(node.id))
        .attr('opacity', 1)
        .classed('node', true)
        .call(d3.drag()
          .on('drag', function(d) {
            d3.select(this).selectAll('.outer').attr('x', d.x = d3.event.x).attr('y', d.y = d3.event.y)
            d3.select(this).selectAll('.inner').attr('x', d.x = d3.event.x + 2).attr('y', d.y = d3.event.y + 2)
            // d3.select(this).select('.text').attr('')
          }))

      this.nodes.forEach(node => {
        const rect_g = d3.select('#' + this.generateRectId(node.id))
        rect_g.append('rect')
          .attr('width', 36)
          .attr('height', 36)
          .attr('x', -18)
          .attr('y', -18)
          .attr('fill', '#FFFFFF')
          .classed('outer', true)

        rect_g.append('rect')
          .attr('width', 32)
          .attr('height', 32)
          .attr('x', -16)
          .attr('y', -16)
          .attr('fill', 'rgb(91, 153, 210)')
          .classed('inner', true)

        rect_g.append('use')
          .attr('href', '#switch')
          .attr('width', 36)
          .attr('height', 36)
          .attr('x', -18)
          .attr('y', -18)
          .attr('fill', '#EEEEEE')
          .classed('outer', true)

        rect_g.append('text')
          .attr('txt-anchor', 'left')
          .attr('x', 22)
          .attr('y', '0.3em')
          .style('transform', 'scale(1)')
          .classed('inner', true)
      })

      svg.call(d3.zoom()
        .extent([[0, 0], [width, height]])
        .scaleExtent([1, 5])
        .on('zoom', function() {
          g.attr('transform', d3.event.transform)
        }))
    },
    generateRectId(deviceId) {
      return deviceId.replace(/[.:\/]/g, '-')
    },
    zoom() {
      // const ele = d3.select('#d3')
      // console.log('ele: ', ele)
      // ele.on('click', function() {
      //   console.log('click......')
      //   d3.select(this).style('background', 'red')
      // })
      // ele.nodes.forEach(node => {
      //   node.style('color', 'red')
      // })
      // console.log(ele.nodes())

      // const zoom = d3.zoom()
      //   ele.call(zoom)
      //     .on('dblclick.zoom', () => {
      //       console.log('dblclick......')
      //     })
      //     .on('mousedown.zoom', () => {
      //       console.log('mousedown......')
      //     })
      //     // .on('mousemove', () => {
      //     //   console.log('mousemove......')
      //     // })
      //     .on('dragstart', () => {
      //       console.log('dragstart......')
      //     })
      //
      //   ele.call(zoom.transform, d3.zoomIdentity)
      //
      //   zoom.translateTo(ele, 10, 20);

      // const width = 800
      // const height = 800
      // const svg = d3.create('svg')
      // .attr('viewBox', [0, 0, width, height])

      // const g =
    }
  }
}
</script>

<style scoped>

</style>
