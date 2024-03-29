import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import AuthCallback from '../views/AuthCallback.vue'
import MyPageView from '../views/MyPageView.vue'
import SearchResults from '@/views/SearchResults.vue'
import ThumbnailImg from '../components/room/ThumbnailImg.vue'
import DebateView from '@/views/DebateView.vue'
import RankingView from '@/views/RankingView.vue'
import VotingResult from '../components/modal/VotingResult.vue'
import EncourageModal from '../components/modal/EncourageModal.vue'
import ExitModal from '../components/modal/ExitModal.vue'
import ReportModal from '../components/modal/ReportModal.vue'
import GameStartModal from '../components/modal/GameStartModal.vue'
import PasswordModal from '../components/modal/PasswordModal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/member/login',
      name: 'AuthCallback',
      component: AuthCallback
    },
    {
      path: '/member/mypage',
      name: 'MyPageView',
      component: MyPageView
    },
    {
      path: '/search-results/:type/:query',
      name: 'SearchResults',
      component: SearchResults
    },
    // '/member/mypage' 경로가 중복되어 있으므로, 한 개를 제거합니다.
    {
      path: '/image',
      name: 'ThumbnailImg', // 라우트에 이름을 추가합니다.
      component: ThumbnailImg
    },
    {
      path: '/debate/:sessionId',
      name: 'DebateView',
      component: DebateView
    },
    {
      path: '/member/profile-edit',
      name: 'ProfileEdit',
      component: () => import('../views/ProfileEditView.vue')
    },
    {
      path: '/ranking',
      name: 'RankingView',
      component: RankingView
    },
    {
      path: '/modal1',
      name: 'VotingResult',
      component: VotingResult
    },
    {
      path: '/modal2',
      name: 'EncourageModal',
      component: EncourageModal
    },
    {
      path: '/modal3',
      name: 'ExitModal',
      component: ExitModal
    },
    {
      path: '/modal4',
      name: 'ReportModal',
      component: ReportModal
    },
    {
      path: '/modal5',
      name: 'GameStartModal',
      component: GameStartModal
    },
    {
      path: '/modal6',
      name: 'PasswordModal',
      component: PasswordModal
    }
  ]
})

export default router
