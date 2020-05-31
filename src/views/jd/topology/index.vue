<template>
  <div style="background: #c4d4d0">
    <svg
      id="tp-svg"
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
      <g id="tp-wrapper">
        <g id="tp-link" />
        <g id="tp-node" />
        <g id="tp-port" />
        <g id="tp-line" />
        <g id="tp-link-text" />
      </g>
    </svg>
    <!--
      路由表格
    -->
    <div id="router" class="over">
      <div class="menu-net">
        <el-table
          :data="routers"
          :row-class-name="() => 'customHover'"
          :row-style="handleTableRow"
          :show-header="false"
          border
          @row-click="handleRouteSelect"
        >
          <el-table-column type="index" align="center" label="#" />
          <el-table-column prop="src" width="150px" align="center" label="node1" />
          <el-table-column prop="dst" width="150px" align="center" label="node2" />
        </el-table>
      </div>
    </div>

    <div class="tool-box">
      <div class="menu-net">
        <div class="tools">
          <ul>
            <li>
              <el-button type="warning" @click="testAddLink">
                addLink
              </el-button>
            </li>
            <li>
              <el-button
                :type="custom.label ? 'warning' : 'primary'"
                @click="switchLabelHandler"
              >
                {{ custom.label ? '关闭设备ID(L)' : '显示设备ID(L)' }}
              </el-button>
            </li>
            <li>
              <el-button
                :type="custom.panel ? 'warning' : 'primary'"
                @click="showPanel"
              >
                {{ custom.panel ? '关闭路由列表(P)' : '显示路由列表(P)' }}
              </el-button>
            </li>
            <li>
              <el-button
                :type="custom.fixed ? 'warning' : 'primary'"
                @click="fixNode"
              >
                {{ custom.fixed ? '松开节点(F)' : '固定节点(F)' }}
              </el-button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import resize from './mixins/resize'

import dataAPI from './data/device'
import * as d3 from 'd3'

export default {
  name: 'Index',
  mixins: [resize],
  data() {
    return {
      nodes: [],
      nodeMap: {},
      links: [],
      routers: [],
      selectedRouters: [],

      interval: {
        rectIntervalShrink: undefined,
        panelInterval: undefined
      },

      simulation: undefined,

      selectedRouter: '',

      transform: undefined,

      custom: {
        fixed: false,
        label: false,
        panel: false,
        nodeLabel: false
      }
    }
  },
  created() {
    this.loadResource()
  },
  mounted() {
    this.$nextTick(() => {
      this.initZoom()
      this.startSimulation()
    })
  },
  methods: {
    loadResource() {
      this.loadNodes()
      this.loadLinks()
      this.loadRouters()
    },

    loadNodes() {
      const nodes = dataAPI.deviceList()
      this.nodeMap = nodes.reduce((pre, cur) => {
        pre[cur.id] = this.nodeMap[cur.id] ? this.nodeMap[cur.id] : cur
        return pre
      }, {})
      this.nodes = Object.values(this.nodeMap)
    },

    loadLinks() {
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
      }, []).reduce((pre, cur) => {
        const { source, target, sourcePort, targetPort, type, detail } = cur
        pre.push(cur)
        pre.push({
          source: target,
          target: source,
          sourcePort: targetPort,
          targetPort: sourcePort,
          type,
          detail
        })
        return pre
      }, [])
    },

    loadRouters() {
      this.routers = dataAPI.routerList().map(router => {
        return {
          src: router.key.src,
          dst: router.key.dst,
          links: router.links
        }
      })
      if (this.selectedRouter) {
        for (const router of this.routers) {
          if (router.src === this.selectedRouter.src && router.dst === this.selectedRouter.dst) {
            this.selectedRouter = router
            break
          }
        }
      }
    },

    restoreSelected() {
      if (this.selectedRouter) {
        const tmp = { ...this.selectedRouter }
        this.selectedRouter = undefined
        this.handleRouteSelect(tmp)
      } else {
        this.removeLine(undefined, true)
        this.removeLinkText(undefined, true)
        this.removePortNum(undefined, true)
        this.removeHighLight(undefined, true)
      }
    },

    startSimulation() {
      this.initSimulation()

      this.initNodes()

      this.initLinks()

      this.initMarker()

      this.initLines()

      this.initLinkLabels()

      this.simulationTick()

      this.simulation.force('link').links(this.links)

      this.keyboardEvent()

      this.linkEvent()

      this.restoreSelected()

      this.hiddenPanel()
    },

    initZoom() {
      d3.select('#tp-svg')
        .attr('cursor', 'grab')
        .call(d3.zoom().extent([[0, 0], [this.$data.svgSize.width, this.$data.svgSize.height]])
          .on('zoom', () => {
            this.transform = d3.event.transform
            d3.select('#tp-wrapper').attr('transform', d3.event.transform)
          }), d3.zoomIdentity)
    },

    initSimulation() {
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
      d3.select('#tp-node').selectAll('g').remove()
      const node = d3.select('#tp-node').selectAll('g')
        .data(this.nodes)
        .enter()
        .append('g').call(d3.drag().on('drag', d => {
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
    },

    initLinks() {
      d3.select('#tp-link').selectAll('path').remove()
      d3.select('#tp-link').selectAll('path')
        .data(this.links)
        .enter()
        .append('path')
        .attr('stroke', '#999')
        .attr('stroke-width', 2)
        .attr('id', d => this.linkId(d))
    },

    initLinkLabels() {
      d3.select('#tp-link-text').selectAll('text')
        .data(this.links)
        .enter()
        .append('text')
        .classed('linkLabel', true)
        .style('pointer-events', 'none')
        .attr('dy', '-0.5em')
        // .attr('dx', d => {
        //   return (d.detail.index + 1.5) + 'em'
        // })
        .attr('id', d => this.labelId(d))
        .attr('font-size', '1em')
        .attr('fill', '#127862')
        .classed('node-hidden', true)

        .append('textPath')
        .attr('xlink:href', d => '#' + this.linkId(d))
        .style('text-anchor', 'middle')
        .style('pointer-events', 'none')
        .attr('startOffset', '50%')
        .text(d => d.type)
    },

    initMarker() {
      d3.select('#tp-svg').select('defs')
        .append('marker')
        .attr('id', 'arrowhead')
        .attr('viewBox', '-0 -5 10 10')
        .attr('refX', 23)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 13)
        .attr('markerHeight', 13)
        .attr('xoverflow', 'visible')
        .append('svg:path')
        .attr('d', 'M 0 -5 L 10 0 L 0 5 Z')
        .attr('fill', '#127862')
        .style('stroke', 'none')
    },

    initLines() {
      d3.select('#tp-line').selectAll('line').remove()
      d3.select('#tp-line').selectAll('line')
        .data(this.links)
        .enter()
        .append('line')
        .attr('id', d => this.lineId(d))
        .attr('marker-end', 'url(#arrowhead)')
        .classed('node-hidden', true)
    },

    simulationTick() {
      this.simulation.nodes(this.nodes).on('tick', () => {
        this.tickNode()
        this.tickLink()
        this.tickLine()
      })
    },

    tickNode() {
      d3.select('#tp-node').selectAll('g').attr('transform', d => {
        // d.fx = d.x
        // d.fy = d.y
        return `translate(${d.x}, ${d.y})`
      })
    },

    tickLink() {
      d3.select('#tp-link').selectAll('path').attr('d', d => {
        const { src, dst } = this.portId(d)

        const axis_selected = this.initLinePortNumberAxis(d)
        const sourceNumLen = d.sourcePort >= 1220 ? 4 : d.sourcePort - 9 > 0 ? 2 : 1
        const targetNumLen = d.targetPort >= 1220 ? 4 : d.targetPort - 9 > 0 ? 2 : 1

        if (!d3.select('#tp-port').select('#' + src).empty()) {
          d3.select('#tp-port').select('#' + src).select('rect')
            .attr('x', sourceNumLen === 2 ? axis_selected.source.x - 10 : sourceNumLen === 1 ? axis_selected.source.x - 5 : axis_selected.source.x - 20)
            .attr('y', axis_selected.source.y - 10)

          d3.select('#tp-port').select('#' + src).select('text')
            .attr('x', sourceNumLen === 2 ? axis_selected.source.x - 10 : sourceNumLen === 1 ? axis_selected.source.x - 5 : axis_selected.source.x - 20)
            .attr('y', axis_selected.source.y)
        }

        if (!d3.select('#tp-port').select('#' + dst).empty()) {
          d3.select('#tp-port').select('#' + dst).select('rect')
            .attr('x', targetNumLen === 2 ? axis_selected.target.x - 10 : targetNumLen === 1 ? axis_selected.target.x - 5 : axis_selected.target.x - 20)
            .attr('y', axis_selected.target.y - 10)

          d3.select('#tp-port').select('#' + dst).select('text')
            .attr('x', targetNumLen === 2 ? axis_selected.target.x - 10 : targetNumLen === 1 ? axis_selected.target.x - 5 : axis_selected.target.x - 20)
            .attr('y', axis_selected.target.y)
        }

        const axis = this.getLineAxis(d)

        return `M ${axis.source.x} ${axis.source.y} L ${axis.target.x} ${axis.target.y}`
      })
    },

    tickLine() {
      d3.select('#tp-line').selectAll('line')
        .attr('x1', d => {
          const axis = this.getLineAxis(d)
          return axis.source.x
        })
        .attr('y1', d => {
          const axis = this.getLineAxis(d)
          return axis.source.y
        })
        .attr('x2', d => {
          const axis = this.getLineAxis(d)
          return axis.target.x
        })
        .attr('y2', d => {
          const axis = this.getLineAxis(d)
          return axis.target.y
        })
    },

    tickPort() {},

    getLineAxis(line) {
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
        axis.x = index % 2 === 0
          ? (((3 + 6 * index / 2) * Math.sqrt(rate * rate + 1)) + (verticalOffset - offset)) / (rate + (1 / rate))
          : (-((3 + (index - 1) * 6 / 2) * Math.sqrt(rate * rate + 1)) + (verticalOffset - offset)) / (rate + 1 / rate)
        axis.y = (-1 / rate) * axis.x + verticalOffset
      } else {
        if (index === 0) {
          axis.x = pre.x
          axis.y = pre.y
        } else {
          axis.x = index % 2 === 0
            ? ((6 * index / 2 * Math.sqrt(rate * rate + 1)) + (verticalOffset - offset)) / (rate + 1 / rate)
            : ((-6 * (index + 1) / 2 * Math.sqrt(rate * rate + 1)) + (verticalOffset - offset)) / (rate + 1 / rate)
          axis.y = (-1 / rate) * axis.x + verticalOffset
        }
      }
      return axis
    },

    nodeId(node) {
      return 'node' + node.id.replace(/[.:]/g, '-')
    },

    linkId(link) {
      const { src, dst } = this.linkIdNode(link)
      return 'link-' + src + '-' + dst
    },

    linkId_reverse(link) {
      const { src, dst } = this.linkIdNode(link)
      return 'link-' + dst + '-' + src
    },

    linkIdNode(link) {
      const srcDeviceId = link.source.id ? link.source.id.replace(/[:.]/g, '-') : link.source.replace(/[:.]/g, '-')
      const dstDeviceId = link.target.id ? link.target.id.replace(/[:.]/g, '-') : link.target.replace(/[:.]/g, '-')
      return {
        src: srcDeviceId + '-' + link.sourcePort,
        dst: dstDeviceId + '-' + link.targetPort
      }
    },

    labelId(line) {
      const { src, dst } = this.linkIdNode(line)
      return 'label' + '-' + src + '-' + dst
    },

    labelId_reverse(line) {
      const { src, dst } = this.linkIdNode(line)
      return 'label' + '-' + dst + '-' + src
    },

    lineId(line) {
      const { src, dst } = this.linkIdNode(line)
      return 'line-' + src + '-' + dst
    },

    lineId_reverse(line) {
      const { src, dst } = this.linkIdNode(line)
      return 'line-' + dst + '-' + src
    },

    portId(line) {
      const { src, dst } = this.linkIdNode(line)
      return {
        src: 'port' + '-' + src,
        dst: 'port' + '-' + dst
      }
    },

    handleRouteSelect(row, column, event) {
      this.removeLine(undefined, true)
      this.removeLinkText(undefined, true)
      this.removePortNum(undefined, true)
      this.removeHighLight(undefined, true)

      if ((this.selectedRouter && this.selectedRouter.src === row.src && this.selectedRouter.dst === row.dst)) {
        this.selectedRouter = undefined
      } else {
        this.selectedRouter = row
        const links_selected = []
        for (const link of row.links) {
          const srcDeviceId = link.src.key.deviceId
          const srcPort = link.src.key.port
          const dstDeviceId = link.dst.key.deviceId
          const dstPort = link.dst.key.port

          for (const d of this.links) {
            const dSrcDeviceId = d.source.id
            const dSrcPort = d.sourcePort
            const dDstDeviceId = d.target.id
            const dDstPrt = d.targetPort
            if (dSrcDeviceId === srcDeviceId && dSrcPort === srcPort && dDstDeviceId === dstDeviceId && dDstPrt === dstPort) {
              links_selected.push(d)
            }
          }
        }

        for (const d of links_selected) {
          this.higLight(d, true)
          this.showLine(d, true)
          this.showLinkText(d, true)
          this.showPortNum(d, true)
        }
      }
    },

    handleTableRow({ row }) {
      if ((this.selectedRouter && this.selectedRouter.src === row.src && this.selectedRouter.dst === row.dst)) {
        return {
          'background-color': '#1AAD8D!important',
          'color': 'white',
          'border': 0,
          'margin': 0
        }
      } else {
        return {
          'background-color': '#c4d4d0!important',
          'color': 'black'
        }
      }
    },

    linkEvent() {
      const paths = d3.select('#tp-link').selectAll('path')
      paths.on('mouseover', d => {
        this.higLight(d)
        this.showPortNum(d)
        this.showLinkText(d)
        this.showLine(d)
      })

      paths.on('mouseout', d => {
        this.removeHighLight(d)
        this.removePortNum(d)
        this.removeLinkText(d)
        this.removeLine(d)
      })
    },

    higLight(d, selected = false) {
      if (selected) {
        d3.select('#tp-link').select('#' + this.linkId(d)).classed('selected', true).classed('path-selected', true)
        d3.select('#tp-link').select('#' + this.linkId_reverse(d)).classed('link-stroke-hidden', true)
      } else {
        if (!d3.select('#tp-link').select('#' + this.linkId(d)).classed('selected')) {
          d3.select('#tp-link').select('#' + this.linkId(d)).classed('line-mouseover', true)
          d3.select('#tp-link').select('#' + this.linkId_reverse(d)).classed('link-stroke-hidden', true)
        }
      }
    },

    removeHighLight(d, selected = false) {
      if (selected) {
        d3.select('#tp-link').selectAll('.selected').classed('selected', false).classed('path-selected', false)
        d3.select('#tp-link').selectAll('.link-stroke-hidden').classed('link-stroke-hidden', false)
      } else {
        if (!d3.select('#tp-link').select('#' + this.linkId(d)).classed('selected')) {
          d3.select('#tp-link').select('#' + this.linkId(d)).classed('line-mouseover', false)
          d3.select('#tp-link').select('#' + this.linkId_reverse(d)).classed('link-stroke-hidden', false)
        }
      }
    },

    showLinkText(d, selected = false) {
      if (d3.select('#tp-link-text').select('#' + this.labelId(d)).classed('node-hidden')) {
        d3.select('#tp-link-text').select('#' + this.labelId(d)).classed('node-hidden', false).classed('selected', selected)
      }
      if (d3.select('#tp-link-text').select('#' + this.labelId_reverse(d)).classed('node-hidden')) {
        d3.select('#tp-link-text').select('#' + this.labelId_reverse(d)).classed('node-hidden', false).classed('selected', selected)
      }
    },

    removeLinkText(d, selected = false) {
      if (selected) {
        d3.select('#tp-link-text').selectAll('.selected').classed('node-hidden', true).classed('selected', false)
      } else {
        if (!d3.select('#tp-link-text').select('#' + this.labelId(d)).classed('selected')) {
          if (!d3.select('#tp-link-text').select('#' + this.labelId(d)).classed('node-hidden')) {
            d3.select('#tp-link-text').select('#' + this.labelId(d)).classed('node-hidden', true)
          }
        }

        if (!d3.select('#tp-link-text').select('#' + this.labelId_reverse(d)).classed('selected')) {
          if (!d3.select('#tp-link-text').select('#' + this.labelId_reverse(d)).classed('node-hidden')) {
            d3.select('#tp-link-text').select('#' + this.labelId_reverse(d)).classed('node-hidden', true)
          }
        }
      }
    },

    showLine(d, selected = false) {
      if (d3.select('#tp-line').select('#' + this.lineId(d)).classed('node-hidden')) {
        d3.select('#tp-line').select('#' + this.lineId(d)).classed('node-hidden', false).classed('selected', selected)
      }
    },

    removeLine(d, selected = false) {
      if (selected) {
        d3.select('#tp-line').selectAll('.selected').classed('node-hidden', true).classed('selected', false)
      } else {
        if (!d3.select('#tp-line').select('#' + this.lineId(d)).classed('selected')) {
          if (!d3.select('#tp-line').select('#' + this.lineId(d)).classed('node-hidden')) {
            d3.select('#tp-line').select('#' + this.lineId(d)).classed('node-hidden', true)
          }
        }
      }
    },

    removePortNum(d, selected = false) {
      if (selected) {
        d3.select('#tp-port').selectAll('g').remove()
      } else {
        const { src, dst } = this.portId(d)

        if (!d3.select('#tp-port').select('#' + src).select('rect').classed('selected')) {
          d3.select('#tp-port').select('#' + src).remove()
        }

        if (!d3.select('#tp-port').select('#' + dst).select('rect').classed('selected')) {
          d3.select('#tp-port').select('#' + dst).remove()
        }
      }
    },

    showPortNum(line, selected = false) {
      const { src, dst } = this.linkIdNode(line)
      if (d3.select('#tp-port').select('#' + 'rect-' + src).empty()) {
        const axis = this.initLinePortNumberAxis(line)
        const el = d3.select('#tp-port')
          .attr('transform', 'scale(1)')
        const elSource = el.append('g').attr('id', this.portId(line).src)
        const elTarget = el.append('g').attr('id', this.portId(line).dst)
        const sourceNumLen = line.sourcePort >= 1220 ? 4 : line.sourcePort - 9 > 0 ? 2 : 1

        const sourceRect = elSource.append('rect')
          .attr('width', sourceNumLen === 2 ? 20 : sourceNumLen === 1 ? 10 : 40)
          .attr('height', 20)
          .attr('x', sourceNumLen === 2 ? axis.source.x - 10 : sourceNumLen === 1 ? axis.source.x - 5 : axis.source.x - 20)
          .attr('y', axis.source.y - 10)
          .attr('rx', 5)
          .attr('ry', 5)
          .style('stroke', '#969696')
          .style('stroke-width', 1)
          .classed('selected', selected)

        const sourceText = elSource.append('text')
          .attr('text-anchor', 'right')
          .attr('x', sourceNumLen === 2 ? axis.source.x - 10 : sourceNumLen === 1 ? axis.source.x - 5 : axis.source.x - 20)
          .attr('y', axis.source.y)
          .attr('dy', '0.3em')
          .text(line.sourcePort)
          .classed('selected', selected)

        // 如果出端口小于0表示出端口链接了一台host
        if (line.type === 'wireless') {
          const targetNumLen = line.targetPort >= 1220 ? 4 : line.targetPort - 9 > 0 ? 2 : 1
          const targetRect = elTarget.append('rect')
            .attr('width', targetNumLen === 2 ? 20 : targetNumLen === 1 ? 10 : 40)
            .attr('height', 20)
            .attr('x', targetNumLen === 2 ? axis.target.x - 10 : targetNumLen === 1 ? axis.target.x - 5 : axis.target.x - 20)
            .attr('y', axis.target.y - 10)
            .attr('rx', 5)
            .attr('ry', 5)
            .style('stroke', '#969696')
            .style('stroke-width', 1)
            .classed('selected', selected)

          const targetText = elTarget.append('text')
            .attr('text-anchor', 'right')
            .attr('x', targetNumLen === 2 ? axis.target.x - 10 : targetNumLen === 1 ? axis.target.x - 5 : axis.target.x - 20)
            .attr('y', axis.target.y)
            .attr('dy', '0.3em')
            .text(line.targetPort)
            .classed('selected', selected)

          sourceRect.attr('id', () => selected ? 'rect-' + src : '').style('fill', () => selected ? '#1AAD8D' : '#FFFFFF')
          sourceText.attr('id', () => selected ? 'text-' + src : '').style('fill', () => selected ? '#FFFFFF' : '#000000')
          targetRect.attr('id', () => selected ? 'rect-' + dst : '').style('fill', () => selected ? '#1AAD8D' : '#FFFFFF')
          targetText.attr('id', () => selected ? 'text-' + dst : '').style('fill', () => selected ? '#FFFFFF' : '#000000')
        }
      }
    },

    initLinePortNumberAxis(line) {
      const axis = this.getLineAxis(line)
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

    keyboardEvent() {
      d3.select('body').on('keydown', () => {
        const key = d3.event.key
        // console.log('key: ', key)
        if (/^[lL]$/.test(key) && !this.interval.rectIntervalShrink) {
          this.switchLabelHandler()
        }
        if (/^[pP]$/.test(key) && !this.interval.panelInterval) {
          this.showPanel()
        }
        if (/^[fF]$/.test(key)) {
          this.fixNode()
        }
        if (/^[rR]$/.test(key)) {
          this.transform.x = 0
          this.transform.y = 0

          d3.select('#topology-zoom').attr('transform', this.transform)
        }
      })
    },

    fixNode() {
      if (this.custom.fixed) {
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
      this.custom.fixed = !this.custom.fixed
    },

    switchLabelHandler() {
      const that = this
      const elRect = d3.select('#tp-node').selectAll('g').select('rect')
      const elText = d3.select('#tp-node').selectAll('g').select('text')

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
      this.custom.label = !this.custom.label
    },

    showPanel() {
      if (!this.interval.panelInterval) {
        const x = document.getElementById('router')
        const width = x.offsetWidth
        if (this.custom.panel) {
          let offset = 0
          this.interval.panelInterval = setInterval(() => {
            if (Math.abs(offset) >= width) {
              d3.select('#router').style('right', (0 - width) + 'px')
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
        this.custom.panel = !this.custom.panel
      }
    },

    hiddenPanel() {
      if (!this.custom.panel) {
        const x = document.getElementById('router')
        const width = x.offsetWidth
        d3.select('#router').style('right', (0 - width) + 'px')
      }
    },

    testAddLink() {
      this.loadResource()

      this.nodes.push({
        id: 'device:10.10.10.100',
        type: 'switch',
        status: true
      })

      this.links.push({
        source: 'device:10.10.10.12',
        sourcePort: 30,
        target: 'device:10.10.10.17',
        targetPort: 30,
        type: 'wireless',
        detail: {
          index: 1,
          total: 2
        }
      })

      this.links.push({
        target: 'device:10.10.10.12',
        targetPort: 30,
        source: 'device:10.10.10.17',
        sourcePort: 30,
        type: 'wireless',
        detail: {
          index: 1,
          total: 2
        }
      })

      this.startSimulation()
    }
  }
}
</script>

<style>
.el-table .customHover {
  cursor: pointer;
  /*  */
}
.el-table .el-table__body-wrapper .customHover:hover>td {
  background: none!important;
}
.el-table .el-table__body-wrapper .customHover>td {
  padding: 0;
  margin: 0;
  white-space: nowrap;
}
.line-mouseover {
  stroke-width: 5;
  stroke: green;
}
.path-selected {
  stroke: #1AAD8D;
  stroke-width: 5;
}
.node-hidden {
  display: none;
}

.link-stroke-hidden {
  stroke-width: 0;
}
</style>

<style scoped>
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
    /*border-width: 6px 2px 3px;*/
    /*margin-bottom: 2em;*/
    /*padding: .5em 1em;*/
    position: relative;
  }
.tool-box {
  bottom: 0;
  left: 0;
  /*padding: 1em;*/
  position: absolute;
  z-index: 102;
}
.menu-net {
  background-color: #acd2ca;
  border: 2px solid #127862;
  /*border-radius: .5em;*/
  /*border-width: 6px 2px 3px;*/
  /*margin-bottom: 2em;*/
  /*padding: .5em 1em;*/
  position: relative;
}
.tools ul {
  display: block;
  list-style: none;
  /*margin: 0 3em 0.5em 0;*/
  margin: 0 auto;
  padding: 0;
}
.tools ul li {
  display: inline;
  /*margin-left: 50px;*/
}
</style>
