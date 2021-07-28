export const colors: string[] = [ 'blue', 'green', 'orange', 'purple', 'red', 'yellow', 'cyan'];
const randColorIdx = Math.floor(Math.random() * 8);

export const fcEventLeftBorderClsName = (idx: number | null | undefined | '') => 
`fc-v-event-${colors[idx || randColorIdx]}`;