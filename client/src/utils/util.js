import { CgProfile } from 'react-icons/cg'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { BsGraphDown } from 'react-icons/bs'
import { } from 'react-icons/gi'


const links = [{
  name: 'Profile',
  path: '.',
  icon: <CgProfile />,
},
{
  name: "Admin",
  path: "admin",
  icon: <MdOutlineAdminPanelSettings />,
},
{
  name: "Weight Tracker",
  path: "weight-track",
  icon: <BsGraphDown />,
},
{
  name: "All Exercises",
  path: "all-exercises",
},
{
  name: "Add Exercise",
  path: "add-exercise",
}
]