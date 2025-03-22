export const categories = [
  {
    id: 'action',
    name: '动作游戏',
    description: '刺激的动作游戏，考验你的反应速度和操作技巧。'
  },
  {
    id: 'puzzle',
    name: '解谜游戏',
    description: '烧脑的解谜游戏，锻炼你的逻辑思维和问题解决能力。'
  },
  {
    id: 'strategy',
    name: '策略游戏',
    description: '需要深思熟虑的策略游戏，考验你的决策能力。'
  },
  {
    id: 'arcade',
    name: '街机游戏',
    description: '经典的街机游戏，带你重温童年回忆。'
  },
  {
    id: 'casual',
    name: '休闲游戏',
    description: '轻松有趣的休闲游戏，适合放松心情。'
  },
  {
    id: 'multiplayer',
    name: '多人游戏',
    description: '支持多人联机的游戏，与好友一起享受游戏乐趣。'
  }
]

export const games = [
  {
    id: '2048',
    name: '2048',
    description: '经典的数字合并游戏，通过方向键移动数字，相同数字合并，目标是获得2048。',
    thumbnail: '/thumbnails/2048.jpg',
    url: 'https://2048.ninja/',
    category: 'puzzle',
    tags: ['数字', '解谜', '休闲']
  },
  {
    id: 'tetris',
    name: '俄罗斯方块',
    description: '经典的俄罗斯方块游戏，通过旋转和移动方块，消除完整的行。',
    thumbnail: '/thumbnails/tetris.jpg',
    url: 'https://chvin.github.io/react-tetris/',
    category: 'arcade',
    tags: ['经典', '街机', '休闲']
  },
  {
    id: 'snake',
    name: '贪吃蛇',
    description: '经典的贪吃蛇游戏，控制蛇移动吃食物，避免撞到自己。',
    thumbnail: '/thumbnails/snake.jpg',
    url: 'https://snake.io/',
    category: 'arcade',
    tags: ['经典', '街机', '休闲']
  },
  {
    id: 'pacman',
    name: '吃豆人',
    description: '经典的吃豆人游戏，在迷宫中吃豆子，躲避幽灵。',
    thumbnail: '/thumbnails/pacman.jpg',
    url: 'https://pacman.platzh1rsch.ch/',
    category: 'arcade',
    tags: ['经典', '街机', '休闲']
  },
  {
    id: 'chess',
    name: '国际象棋',
    description: '经典的国际象棋游戏，与AI对战，提升棋艺。',
    thumbnail: '/thumbnails/chess.jpg',
    url: 'https://www.gamesforthebrain.com/game/chess/',
    category: 'strategy',
    tags: ['棋类', '策略', '对战']
  },
  {
    id: 'sudoku',
    name: '数独',
    description: '经典的数字逻辑游戏，在9x9的格子中填入数字，使每行、每列和每个3x3的方格都包含1-9的数字。',
    thumbnail: '/thumbnails/sudoku.jpg',
    url: 'https://www.websudoku.com/?level=1',
    category: 'puzzle',
    tags: ['数字', '解谜', '休闲']
  }
] 