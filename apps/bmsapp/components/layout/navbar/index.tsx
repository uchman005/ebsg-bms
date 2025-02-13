import style from './navbar.module.scss';
import React from 'react';
import Image from 'next/image';
import { _IMAGES } from 'constants/images';
import { FaListAlt, FaUserCircle } from 'react-icons/fa';
import { useUser } from 'services/use-user';
import Link from 'next/link';

export const LayoutNavBar = () => {
  const { logout } = useUser();
  return (
    <>
      <nav className={style.nav}>
        <div className={style.sidebartop}>
          <Link
            href={'#'}
            className="tw-absolute tw-top-[0] -tw-right-[45px] tw-bg-[#3d5af1] tw-rounded-full tw-text-white tw-text-center tw-cursor-pointer tw-z-50 tw-p-4 hover:tw-bg-[#5872f5] hover:tw-shadow-xl hover:tw-text-white"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <FaListAlt color="#fffff" size={35} />
          </Link>
          <Image src={_IMAGES.LOGO} width={50} className="logo" alt="" />
          <h3 className="hide">eBudget</h3>
        </div>

        <div className={style.search}>
          <i className="bx bx-search" />
          <input type="text" className="hide" placeholder="Quick Search ..." />
        </div>

        <div className={style.sidebarlinks}>
          <ul>
            <div className="active-tab" />
            <li>
              <Link href="/dashboard">
                <span className="link hide">Dashboard</span>
              </Link>
            </li>
          </ul>
          <h4 className="hide">Documents</h4>
          <ul>
            <div className="active-tab" />
            <li>
              <Link href="/dashboard/documents">
                <span className="link">My Documents</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/templates">
                <span className="link">Document Templates</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/files">
                <span className="link">Files & Uploads</span>
              </Link>
            </li>
          </ul>
          <h4 className="hide">Budgets & Reports</h4>
          <ul>
            <div className="active-tab" />
            <li>
              <Link href="/dashboard/budgets">
                <span className="link hide">Manage Budgets</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/reports">
                <span className="link">Manage Reports</span>
              </Link>
            </li>
          </ul>
          <h4 className="hide">Settings</h4>
          <ul>
            <div className="active-tab" />
            <li>
              <Link href="/dashboard/mdas">
                <span className="link hide">Manage MDAs</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/accounts">
                <span className="link hide">Users & Accounts</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/roles">
                <span className="link hide">Access & Roles</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings/profile">
                <span className="link">Profile Manage</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings/config">
                <span className="link hide">App Settings</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings/securities">
                <span className="link hide">Securities</span>
              </Link>
            </li>
          </ul>

          <h4 className="hide">Activities</h4>
          <ul>
            <li>
              <Link href="/dashboard/activities/conversations">
                <span className="link hide">Chats & Conversations</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/activities/ai-tools">
                <span className="link hide">AI Tools</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                }}
              >
                <span className="link hide">Exit & Logout</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className={style.sidebarfooter}>
          <div className="account tw-flex">
            <Link href="#" className="tw-mr-3">
              <FaUserCircle size={30} color="#FFFFFF" />
            </Link>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
            >
              <h3 className="tw-m-0 tw-m-t-[2px] tw-text-white">Logout</h3>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LayoutNavBar;
