<template>
  <div style="background: #c4d4d0">
    <svg
      id="topology-container"
      :width="svgSize.width ? svgSize.width : 0"
      :height="svgSize.height ? svgSize.height - 4 : 0"
      :viewBox="[0, 0, svgSize.width, svgSize.height]"
    >
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
      <g id="topology-zoom">
        <g id="topology-links" />
        <g id="topology-nodes" />
        <g id="topology-portLabel" />
      </g>
    </svg>
    <div class="tools">
      <ul>
        <li>
          <button class="circle" @click="buttonCtr">
            <svg-icon icon-class="theme" />
          </button>
        </li>
        <li>
          <button class="circle" @click="restTranslate">
            <svg-icon icon-class="theme" />
          </button>
        </li>
      </ul>
    </div>
    <div id="router" class="over">
      <div class="menu-net">
        <el-table :data="routeList" border>
          <el-table-column type="index" align="center" label="#" />
          <el-table-column prop="src" width="250px" align="center" label="node1" />
          <el-table-column prop="dst" width="250px" align="center" label="node2" />
          <!---->
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import resize from './mixins/resize'

import dataAPI from './data/device'

import * as d3 from 'd3'

export default {
  name: 'Topology',
  mixins: [resize],
  data() {
    return {
      nodes: [],
      links: [],
      simulation: undefined,
      interval: {
        rectIntervalShrink: undefined,
        panelInterval: undefined
      },
      routeList: [
        {
          src: '10.10.10.10/24',
          dst: '10.10.10.14/12'
        },
        {
          src: '10.10.10.10/24',
          dst: '10.10.10.14/12'
        },
        {
          src: '10.10.10.10/24',
          dst: '10.10.10.14/12'
        },
        {
          src: '10.10.10.10/24',
          dst: '10.10.10.14/12'
        }
      ],
      panelCtr: false,
      fixCtr: false,
      test: false,
      transform: {
        k: 1,
        x: 0,
        y: 0
      }
    }
  },
  created() {
    this.loadResource()
  },
  mounted() {
    this.$nextTick(() => {
      this.simulationInit()
      this.initLinks()
      this.keyboardEvent()
      this.lineEvent()
      this.svgEvent()
      this.hiddenPanel()
    })
  },
  methods: {
    loadResource() {
      this.nodes = dataAPI.deviceList()
      const link_or = dataAPI.links()
      this.links = link_or.map(link => {
        return {
          source: link.src.key.deviceId,
          sourcePort: link.src.key.port,
          target: link.dst.key.deviceId,
          targetPort: link.dst.key.port,
          type: link.type
        }
      })

      const linkArrMap = this.links.reduce((pre, cur) => {
        const key1 = cur.source + cur.target
        const key2 = cur.target + cur.source
        const key = pre[key1] ? key1 : pre[key2] ? key2 : key1
        const linkArr = pre[key] ? pre[key] : []
        cur.detail = {
          index: linkArr.length
        }
        linkArr.push(cur)
        pre[key] = linkArr
        return pre
      }, {})

      for (const key of Object.keys(linkArrMap)) {
        const len = linkArrMap[key].length
        linkArrMap[key] = linkArrMap[key].map(link => {
          link.detail.total = len
          return link
        })
      }

      this.links = Object.values(linkArrMap).reduce((pre, cur) => {
        return pre.concat(cur)
      }, [])
      // console.log(JSON.stringify(this.links))
    },
    simulationInit() {
      // console.log('width: ', this.$data.svgSize.width)
      // console.log('height: ', this.$data.svgSize.height)
      this.simulation = d3.forceSimulation()
        .force('link', d3.forceLink()
          .id(d => d.id)
          .distance(120))
        .force('charge',
          d3.forceManyBody().strength(-700))
        .force('center',
          d3.forceCenter(this.$data.svgSize.width / 2, this.$data.svgSize.height / 2))
    },
    initNodes() {
      const node = d3.select('#topology-zoom').select('#topology-nodes').selectAll('.node')
        .data(this.nodes)
        .enter()
        .append('g')
        .classed('node', true)
        .call(d3.drag().on('drag', d => {
          d.fx = d3.event.x
          d.fy = d3.event.y
        }).on('start', d => {
          if (!d3.event.active) this.simulation.alphaTarget(0.3).restart()
          d.fy = d.y
          d.fx = d.x
        }))

      node.append('rect')
        .attr('width', 36)
        .attr('height', 36)
        .attr('x', -18)
        .attr('y', -18)
        .attr('fill', '#FFFFFF')
        .classed('outer', true)

      node.append('rect')
        .attr('width', 32)
        .attr('height', 32)
        .attr('x', -16)
        .attr('y', -16)
        .attr('fill', 'rgb(91, 153, 210)')
        .classed('inner', true)

      node.append('use')
        .attr('href', '#switch')
        .attr('width', 36)
        .attr('height', 36)
        .attr('x', -18)
        .attr('y', -18)
        .attr('fill', '#EEEEEE')
        .classed('outer', true)

      node.append('text')
        .attr('txt-anchor', 'left')
        .attr('x', 22)
        .attr('y', '0.3em')
        .style('transform', 'scale(1)')
        .classed('inner', true)
    },

    initLinks() {
      const node = d3.select('#topology-zoom').select('#topology-nodes').selectAll('.node')
        .data(this.nodes)
        .enter()
        .append('g')
        .classed('node', true)
        .call(d3.drag().on('drag', d => {
          d.fx = d3.event.x
          d.fy = d3.event.y
        }).on('start', d => {
          if (!d3.event.active) this.simulation.alphaTarget(0.3).restart()
          d.fy = d.y
          d.fx = d.x
        }))

      node.append('rect')
        .attr('width', 36)
        .attr('height', 36)
        .attr('x', -18)
        .attr('y', -18)
        .attr('fill', '#FFFFFF')
        .classed('outer', true)

      node.append('rect')
        .attr('width', 32)
        .attr('height', 32)
        .attr('x', -16)
        .attr('y', -16)
        // .attr('fill', 'rgb(91, 153, 210)')
        .attr('fill', 'green')
        .classed('inner', true)

      node.append('use')
        .attr('href', '#switch')
        .attr('width', 36)
        .attr('height', 36)
        .attr('x', -18)
        .attr('y', -18)
        .attr('fill', '#EEEEEE')
        .classed('outer', true)

      node.append('text')
        .attr('txt-anchor', 'left')
        .attr('x', 22)
        .attr('y', '0.3em')
        .style('transform', 'scale(1)')
        .classed('inner', true)

      const paths = d3.select('#topology-zoom').select('#topology-links').selectAll('.link')
        .data(this.links)
        .enter()
        .append('path')
        .classed('link', true)
        .attr('stroke', '#999')
        .attr('stroke-width', 2)
        .attr('id', (d, i) => 'line' + i)

      this.simulation.nodes(this.nodes).on('tick', () => {
        // console.log('d: ', this.nodes)
        // this.nodes.forEach(node => {
        //   node.fx = node.x
        //   node.fy = node.y
        // })
        node.attr('transform', d => `translate(${d.x}, ${d.y})`)
        paths.attr('d', d => {
          const asix = this.getLineAsix(d)
          // return 'M ' + d.source.x + ', ' + d.source.y + ' L ' + d.target.x + ', ' + d.target.y
          return `M ${asix.source.x} ${asix.source.y} L ${asix.target.x} ${asix.target.y}`
        })
      })

      this.simulation.force('link').links(this.links)

      d3.select('#topology-container')
        .attr('cursor', 'grab')
        .call(d3.zoom().extent([[0, 0], [this.$data.svgSize.width, this.$data.svgSize.height]])
          .on('zoom', () => {
            this.transform = d3.event.transform
            d3.select('#topology-zoom').attr('transform', d3.event.transform)
          }), d3.zoomIdentity)
    },

    lineEvent() {
      const that = this
      const paths = d3.select('#topology-zoom').select('#topology-links').selectAll('.link')
      const node = d3.select('#topology-zoom').select('#topology-nodes').selectAll('.node')
      node.on('click', function(d) {
        d3.event.stopPropagation()
        // d3.event.defaultPrevented = true
        const preNode = d3.select('#topology-zoom').select('#topology-nodes').select('.node-click').classed('node-click', false)
        d3.select(this).select('rect').classed('node-click', preNode.nodes().length === 0 || Object.values(preNode.nodes()[0])[0].id !== d.id)
      })
      // console.log('paths: ', JSON.stringify(paths))
      paths.on('mouseover', function(d) {
        d3.select(this).classed('line-mouse-over', true)
        that.showPortNum(d)
      }).on('mouseout', function(d) {
        d3.select(this).classed('line-mouse-over', false)
        that.removePortNum()
      })
    },

    svgEvent() {
      d3.select('#topology-container').on('click', function() {
        d3.select('#topology-zoom').select('#topology-nodes').selectAll('.node').select('rect').classed('node-click', false)
      })
    },

    keyboardEvent() {
      d3.select('body').on('keydown', () => {
        const key = d3.event.key
        // console.log('key: ', key)
        if (/^[lL]$/.test(key) && !this.interval.rectIntervalShrink) {
          this.switchLabelHandler()
        }
        if (/^[pP]$/.test(key) && !this.interval.panelInterval) {
          this.buttonCtr()
        }
        if (/^[fF]$/.test(key)) {
          if (this.fixCtr) {
            // this.nodes = this.nodes.map(node => {
            //   delete node.fx
            //   delete node.fy
            //   return node
            // })
            this.nodes.forEach(node => {
              delete node.fx
              delete node.fy
            })
          } else {
            this.nodes.forEach(node => {
              node.fx = node.x
              node.fy = node.y
            })
          }
          this.fixCtr = !this.fixCtr
        }
        if (/^[rR]$/.test(key)) {
          this.transform.k = 1
          this.transform.x = 0
          this.transform.y = 0

          d3.select('#topology-zoom').attr('transform', this.transform)
        }
      })
    },
    switchLabelHandler() {
      const that = this
      const elRect = d3.select('#topology-nodes').selectAll('.node').select('rect')
      const elText = d3.select('#topology-nodes').selectAll('.node').select('text')

      if (elText.text()) {
        elText.text(d => '')
        that.interval.rectIntervalShrink = setInterval(function() {
          elRect.attr('width', function(d) {
            const width = parseInt(d3.select(this).attr('width'), 10)
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
        elText.text(d => d.id)
        that.interval.rectIntervalShrink = setInterval(function() {
          elRect.attr('width', function(d) {
            const width = parseInt(d3.select(this).attr('width'), 10)
            if (width >= 180) {
              clearInterval(that.interval.rectIntervalShrink)
              that.interval.rectIntervalShrink = undefined
              return 180
            } else {
              return width + 10
            }
          })
        }, 20)
      }
    },
    getLineAsix(line) {
      const axis = {
        source: {
          x: 0,
          y: 0
        },
        target: {
          x: 0,
          y: 0
        }
      }
      const source = line.source
      const target = line.target
      if (line.detail.total === 1) {
        axis.source.x = source.x
        axis.source.y = source.y
        axis.target.x = target.x
        axis.target.y = target.y
      } else {
        if (line.source.x === line.target.x) {
          //
        } else {
          const rate = (source.y - target.y) / (source.x - target.x)
          const offset = source.y - rate * source.x
          const sourceVerticalOffset = source.y + (1 / rate) * source.x
          const targetVerticalOffset = target.y + (1 / rate) * target.x
          const sourceAxis = this.getSingleAxis(source, rate, offset, sourceVerticalOffset, line.detail.total, line.detail.index)
          const targetAxis = this.getSingleAxis(target, rate, offset, targetVerticalOffset, line.detail.total, line.detail.index)
          axis.source = sourceAxis
          axis.target = targetAxis
        }
      }
      return axis
    },
    /*
    * 获取一条直线上的一个点坐标，该坐标到直线的距离已知
    * 不考虑total = 1 的情况
    * */
    getSingleAxis(pre, rate, offset, verticalOffset, total, index) {
      var axis = {
        x: 0,
        y: 0
      }
      // total的取值范围 {1,}
      if (total % 2 === 0) { // 偶数条线
        //
        axis.x = index % 2 === 0 ? (((3 + 6 * index / 2) * Math.sqrt(rate * rate + 1)) + (verticalOffset - offset)) / (rate + (1 / rate)) : (-((3 + (index - 1) * 6 / 2) * Math.sqrt(rate * rate + 1)) + (verticalOffset - offset)) / (rate + 1 / rate)
        axis.y = (-1 / rate) * axis.x + verticalOffset
      } else {
        if (index === 0) {
          axis.x = pre.x
          axis.y = pre.y
        } else {
          axis.x = index % 2 === 0 ? ((6 * index / 2 * Math.sqrt(rate * rate + 1)) + (verticalOffset - offset)) / (rate + 1 / rate) : ((-6 * (index + 1) / 2 * Math.sqrt(rate * rate + 1)) + (verticalOffset - offset)) / (rate + 1 / rate)
          axis.y = (-1 / rate) * axis.x + verticalOffset
        }
      }
      return axis
    },

    /*
   * 鼠标移出隐藏端口号
   * */
    removePortNum() {
      d3.select('#topology-portLabel').selectAll('g').remove()
    },

    showPortNum(line) {
      // console.log('showPortline: ', line)
      const axis = this.initLinePortNumberAxis(line)
      const el = d3.select('#topology-portLabel')
        .attr('transform', 'scale(1)')
      const elSource = el.append('g')
      const elTarget = el.append('g')
      const sourceNumLen = line.sourcePort >= 1220 ? 4 : line.sourcePort - 9 > 0 ? 2 : 1
      elSource.append('rect')
        // .attr({
        //   'width': line => {
        //     return sourceNumLen === 2 ? 20 : sourceNumLen === 1 ? 10 : 40
        //   },
        //   'height': 20,
        //   'x': sourceNumLen === 2 ? axis.source.x - 10 : sourceNumLen === 1 ? axis.source.x - 5 : axis.source.x - 20,
        //   'y': axis.source.y - 10,
        //   'rx': 5,
        //   'ry': 5
        // })
        .attr('width', sourceNumLen === 2 ? 20 : sourceNumLen === 1 ? 10 : 40)
        .attr('height', 20)
        .attr('x', sourceNumLen === 2 ? axis.source.x - 10 : sourceNumLen === 1 ? axis.source.x - 5 : axis.source.x - 20)
        .attr('y', axis.source.y - 10)
        .attr('rx', 5)
        .attr('ry', 5)
        // .style({
        //   'fill': '#FFFFFF',
        //   'stroke': '#969696',
        //   'stroke-width': 1
        // })
        .style('fill', '#FFFFFF')
        .style('stroke', '#969696')
        .style('stroke-width', 1)
      elSource.append('text')
        // .attr({
        //   'text-anchor': 'right',
        //   'x': sourceNumLen === 2 ? axis.source.x - 10 : sourceNumLen === 1 ? axis.source.x - 5 : axis.source.x - 20,
        //   'y': axis.source.y,
        //   'dy': '0.3em'
        // })
        .attr('text-anchor', 'right')
        .attr('x', sourceNumLen === 2 ? axis.source.x - 10 : sourceNumLen === 1 ? axis.source.x - 5 : axis.source.x - 20)
        .attr('y', axis.source.y)
        .attr('dy', '0.3em')
        .text(line.sourcePort)

      // 如果出端口小于0表示出端口链接了一台host
      if (line.type === 'wireless') {
        var targetNumLen = line.targetPort >= 1220 ? 4 : line.targetPort - 9 > 0 ? 2 : 1
        elTarget.append('rect')
          // .attr({
          //   'width': node => {
          //     return targetNumLen === 2 ? 20 : targetNumLen === 1 ? 10 : 40
          //   },
          //   'height': 20,
          //   'x': targetNumLen === 2 ? axis.target.x - 10 : targetNumLen === 1 ? axis.target.x - 5 : axis.target.x - 20,
          //   'y': axis.target.y - 10,
          //   'rx': 5,
          //   'ry': 5
          // })
          .attr('width', targetNumLen === 2 ? 20 : targetNumLen === 1 ? 10 : 40)
          .attr('height', 20)
          .attr('x', targetNumLen === 2 ? axis.target.x - 10 : targetNumLen === 1 ? axis.target.x - 5 : axis.target.x - 20)
          .attr('y', axis.target.y - 10)
          .attr('rx', 5)
          .attr('ry', 5)
          // .style({
          //   'fill': '#FFFFFF',
          //   'stroke': '#969696',
          //   'stroke-width': 1
          // })
          .style('fill', '#FFFFFF')
          .style('stroke', '#969696')
          .style('stroke-width', 1)
        elTarget.append('text')
          // .attr({
          //   'text-anchor': 'right',
          //   'x': targetNumLen === 2 ? axis.target.x - 10 : targetNumLen === 1 ? axis.target.x - 5 : axis.target.x - 20,
          //   'y': axis.target.y,
          //   'dy': '0.3em'
          // })
          .attr('text-anchor', 'right')
          .attr('x', targetNumLen === 2 ? axis.target.x - 10 : targetNumLen === 1 ? axis.target.x - 5 : axis.target.x - 20)
          .attr('y', axis.target.y)
          .attr('dy', '0.3em')
          .text(line.targetPort)
      }
    },

    /*
  * init axis
  * 固定连线上端口数字显示位置
  * */
    initLinePortNumberAxis(line) {
      const axis = this.getLineAsix(line)
      // const source = line.source
      // const target = line.target
      const source = axis.source
      const target = axis.target
      var mid = {
        x: (source.x + target.x) / 2,
        y: (source.y + target.y) / 2
      }
      var sourceRect = {}
      var targetRect = {}
      if (source.x === target.x) {
        sourceRect.x = source.x
        targetRect.x = target.x
        sourceRect.y = source.y > target.y ? source.y - 40 : source.y + 40
        targetRect.y = source.y > target.y ? target.y + 40 : target.y - 40
        return {
          source: sourceRect,
          target: targetRect
        }
      } else {
        var rate = (source.y - target.y) / (source.x - target.x)
        var offset = source.y - rate * source.x
        var len = Math.sqrt((source.x - target.x) * (source.x - target.x) + (source.y - target.y) * (source.y - target.y))
        var sin = (Math.abs(source.y - target.y) / len)

        sourceRect.y = source.y > target.y ? source.y - 40 * sin : source.y + 40 * sin
        sourceRect.x = (sourceRect.y - offset) / rate
        targetRect.x = 2 * mid.x - sourceRect.x
        targetRect.y = 2 * mid.y - sourceRect.y
        return {
          source: sourceRect,
          target: targetRect
        }
      }
    },

    hiddenPanel() {
      if (!this.panelCtr) {
        console.log('hehehhehhehhe')
        const x = document.getElementById('router')
        const width = x.offsetWidth
        d3.select('#router').style('right', (0 - width) + 'px')
      }
    },

    buttonCtr() {
      if (!this.interval.panelInterval) {
        const x = document.getElementById('router')
        const width = x.offsetWidth
        if (this.panelCtr) {
          let offset = 0
          this.interval.panelInterval = setInterval(() => {
            if (Math.abs(offset) >= width) {
              d3.select('#router').style('right', (0 - width) + 10 + 'px')
              clearInterval(this.interval.panelInterval)
              this.interval.panelInterval = undefined
            } else {
              offset -= 50
              d3.select('#router').style('right', offset + 'px')
            }
          }, 20)
        } else {
          let offset = 0 - width
          this.interval.panelInterval = setInterval(() => {
            if (offset >= 0) {
              d3.select('#router').style('right', 0)
              clearInterval(this.interval.panelInterval)
              this.interval.panelInterval = undefined
            } else {
              offset += 50
              d3.select('#router').style('right', offset + 'px')
            }
          }, 20)
        }
        this.panelCtr = !this.panelCtr
      }
    },

    restTranslate() {
      console.log('transform: ', this.transform)
      this.transform.k = 1
      this.transform.x = 0
      this.transform.y = 0
      d3.select('#topology-zoom').attr('transform', this.transform)
    }
  }
}
</script>

<style>
  .line-mouse-over {
    stroke-width: 5;
    stroke: green;
  }
  .node-click {
    stroke-width: 3;
    stroke: green;
  }
  .over {
    top: 90px;
    right: 0;
    /*padding: 1em;*/
    position: absolute;
    z-index: 100;
  }
  .menu-net {
    background-color: #acd2ca;
    border: 2px solid #127862;
    /*border-radius: .5em;*/
    border-width: 6px 2px 3px;
    margin-bottom: 2em;
    padding: .5em 1em;
    position: relative;
  }
  .tools {
    bottom: 3em;
    position: absolute;
    right: 4em;
    text-align: center;
    z-index: 101;
  }
  .tools ul button {
    height: 3em;
    padding: 0;
    width: 3em;
  }
  .tools ul {
    display: block;
    list-style: none;
    margin: 0 3em 0.5em 0;
    padding: 0;
  }
  .tools ul li {
    display: inline;
    margin-left: 50px;
  }
  .circle {
    border: 2px solid #1AAD8D;
    border-radius: 50%;
    font-weight: 700;
    box-shadow: none;
    outline: 0;
    background-color: #ffffff;
    cursor: pointer;
  }
</style>
