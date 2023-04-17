// ** Icon imports
// import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import { AccountCheck,ExitToApp,FormatListBulleted } from 'mdi-material-ui'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    // {
    //   sectionTitle: 'Pages'
    // },
    // {
    //   title: 'Login',
    //   icon: Login,
    //   path: '/pages/login',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Register',
    //   icon: AccountPlusOutline,
    //   path: '/pages/register',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    {
      sectionTitle: 'Setup Pages'
    },
    {
      title: 'Company Setup',
      icon: FormatLetterCase,
      path: '/company-setup'
    },
    {
      title: 'Request Type',
      path: '/request-type',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Request Status',
      icon: CreditCardOutline,
      path: '/request-status'
    },
    {
      title: 'Priority Setup',
      icon: Table,
      path: '/priority-setup'
    },
    {
      icon: AccountCheck,
      title: 'User Access Control',
      path: '/user-access-control'
    },
    {
      icon: AccountCheck,
      title: 'User Role Setup',
      path: '/user-role-setup'
    },
    {
      sectionTitle: 'Process'
    },
    {
      title: 'Add Request',
      icon: FormatLetterCase,
      path: '/add-request'
    },
    {
      title: 'Request List',
      path: '#',
      icon: FormatListBulleted
    },
    {
      title: 'Pending List',
      icon: FormatListBulleted,
      path: '#'
    },
    {
      title: 'Inprogress List',
      icon: FormatListBulleted,
      path: '#'
    },
    {
      icon: FormatListBulleted,
      title: 'Solved List',
      path: '#'
    },
    {
      icon: FormatListBulleted,
      title: 'Report',
      path: '#'
    },
    {
      icon: ExitToApp,
      title: 'Logout',
      path: '#'
    },
    // {
    //   sectionTitle: 'User Interface'
    // },
    // {
    //   title: 'Typography',
    //   icon: FormatLetterCase,
    //   path: '/typography'
    // },
    // {
    //   title: 'Icons',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // }
  ]
}

export default navigation
