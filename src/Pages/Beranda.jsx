import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="logo.png" alt="Logo" />
        <h2>SMK Negeri 9 BATAM</h2>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/" className="nav-link active">
            <i className="fas fa-home"></i> Beranda
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/data-siswa" className="nav-link">
            <i className="fas fa-users"></i> Data Siswa
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/data-kelas" className="nav-link">
            <i className="fas fa-school"></i> Data Kelas
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/data-user" className="nav-link">
            <i className="fas fa-user-cog"></i> Data User
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/daftar-absensi" className="nav-link">
            <i className="fas fa-calendar-alt"></i> Daftar Absensi
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/laporan" className="nav-link">
            <i className="fas fa-file-alt"></i> Laporan
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
