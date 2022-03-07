import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { month3Data, month4Data } from "../../data";
import "./schedulePage.css";

function ScheduleItem(props) {
  const [open, setOpen] = useState(true);
  return (
    <div className="schedulesFixture">
      <div className="schedulesTimeTitle">
        <h2>{props.month}</h2>
      </div>
      {props.data.map((item) => (
        <div className="schedulesHihi" key={Math.random()}>
          <div className="fixtureTitle">
            <span>{item.date}</span>
            <span>|</span>
            <span>V.League 1 - 2022</span>
          </div>
          <div className={open ? "fixtureDetails" : "show"}>
            <ul>
              <li className="firstTeam">
                <span>{item.homeName}</span>
                <img src={item.home} alt="" />
              </li>
              <li className="fixtureScore">
                <span>{item.score}</span>
              </li>
              <li className="secondTeam">
                <img src={item.away} alt="" />
                <span>{item.awayName}</span>
              </li>
            </ul>
            <div className="fixtureAccord">
              <span onClick={() => setOpen(!open)}>
                <BsChevronDown />
              </span>
            </div>
            <p>Pleiku</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SchedulePage() {
  return (
    <div className="schedules">
      <div className="schedulesTitle">
        <h2>Lịch thi đấu</h2>
      </div>
      <div className="schedulesContainer">
        <div className="schedulesComponent">
          <div className="schedulesFixture">
            <div className="schedulesTimeTitle">
              <h2>Tháng 2 2022</h2>
            </div>
            <div>
              <div className="fixtureTitle">
                <span>Thứ 7, 26/02/2022</span>
                <span>|</span>
                <span>V.League 1 - 2022</span>
              </div>
              <div className="fixtureDetails">
                <ul>
                  <li className="firstTeam">
                    <span>Nam Định</span>
                    <img src="../../../image/namdinh.png" alt="" />
                  </li>
                  <li className="fixtureScore">
                    <span>0-0</span>
                  </li>
                  <li className="secondTeam">
                    <img src="../../../image/hagl.png" alt="" />
                    <span>Hoàng Anh Gia Lai</span>
                  </li>
                </ul>
                <div className="fixtureAccord">
                  <span>
                    <BsChevronDown />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <ScheduleItem month="Tháng 3 2022" data={month3Data} />
          <ScheduleItem month="Tháng 4 2022" data={month4Data} />
        </div>
        <div className="schedulesSiderbar">
          <div className="schedulesRow">
            <div className="schedulesSiderbarTop">
              <img src="../../../image/AFC.png" alt="" />
            </div>
            <div className="schedulesSiderbarBottom">
              <span>
                <h2>Bảng H</h2>
              </span>
              <table className="schedulesSiderbarBottomTable">
                <tbody>
                  <tr className="tableHead">
                    <th>TT</th>
                    <th className="tableName">Đội</th>
                    <th>ĐĐ</th>
                    <th>Thắng</th>
                    <th>Điểm</th>
                  </tr>
                  <tr className="tableRow">
                    <td>1</td>
                    <td className="tableName">Hoàng Anh Gia Lai</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr className="tableRow">
                    <td>2</td>
                    <td className="tableName">Jeonbuk</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr className="tableRow">
                    <td>3</td>
                    <td className="tableName">Marinos</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
              <div className="schedulesSiderbarButton">
                <a href="lich-thi-dau">
                  <span>Xem tất cả</span>
                </a>
              </div>
            </div>
          </div>
          <div className="schedulesRow">
            <div className="schedulesSiderbarTop">
              <img src="../../../image/VLeague2022.png" alt="" />
            </div>
            <div className="schedulesSiderbarBottom">
              <table className="schedulesSiderbarBottomTable">
                <tbody>
                  <tr className="tableHead">
                    <th>TT</th>
                    <th className="tableName">Đội</th>
                    <th>ĐĐ</th>
                    <th>Thắng</th>
                    <th>Điểm</th>
                  </tr>
                  <tr className="tableRow">
                    <td>1</td>
                    <td className="tableName">Hải Phòng</td>
                    <td>2</td>
                    <td>2</td>
                    <td>6</td>
                  </tr>
                  <tr className="tableRow">
                    <td>1</td>
                    <td className="tableName">Hải Phòng</td>
                    <td>2</td>
                    <td>2</td>
                    <td>6</td>
                  </tr>
                  <tr className="tableRow">
                    <td>1</td>
                    <td className="tableName">Hải Phòng</td>
                    <td>2</td>
                    <td>2</td>
                    <td>6</td>
                  </tr>
                  <tr className="tableRow">
                    <td>1</td>
                    <td className="tableName">Hải Phòng</td>
                    <td>2</td>
                    <td>2</td>
                    <td>6</td>
                  </tr>
                  <tr className="tableRow">
                    <td>1</td>
                    <td className="tableName">Hải Phòng</td>
                    <td>2</td>
                    <td>2</td>
                    <td>6</td>
                  </tr>
                  <tr className="tableRow">
                    <td>1</td>
                    <td className="tableName">Hải Phòng</td>
                    <td>2</td>
                    <td>2</td>
                    <td>6</td>
                  </tr>
                  <tr className="tableRow">
                    <td>1</td>
                    <td className="tableName">Hải Phòng</td>
                    <td>2</td>
                    <td>2</td>
                    <td>6</td>
                  </tr>
                </tbody>
              </table>
              <div className="schedulesSiderbarButton">
                <a href="lich-thi-dau">
                  <span>Xem tất cả</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
