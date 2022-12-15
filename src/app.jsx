import { Grid } from 'gridjs'
import 'gridjs/dist/theme/mermaid.css'
import { useEffect, useRef } from 'preact/hooks'
import data from './table.json'

export function App() {
  const wrapperRef = useRef(null)

  const grid = new Grid({
    columns: ['派生先', '閃き難易度', '派生元', '対応武器'],
    search: { selector: (cell, rowIndex, cellIndex) => (cellIndex === 0 ? cell : null) },
    data,
    width: 'auto',
  })

  useEffect(() => {
    grid.render(wrapperRef.current)
  })

  return (
    <div className="container px-4">
      <div ref={wrapperRef} />

      <div id="footer">
        Source:
        <a href="http://tyoikenkyu.web.fc2.com/rsaga_m/data/hirameki_r.html">
          ミンサガ - 閃き派生表（逆引き）｜ちょい研究所
        </a>
      </div>
    </div>
  )
}
