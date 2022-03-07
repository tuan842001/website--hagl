import React from "react";
import "./playerPage.css";
import { Link } from "react-router-dom";

function PlayerItem(props) {
  return (
    <>
      <div className="playerPost playerPosts">
        <Link className="links" to="/cau-thu">
          <figure className="playerFigure">
            <img className="playerImg" src={props.img} alt="" />
            <div className="gradient"></div>
          </figure>

          <div className="playerInfo">
            <span className="playerNumber">{props.number}</span>
            <span className="playerName">{props.surname}</span>
            <span className="playerName">{props.firstname}</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default function PlayerPage() {
  return (
    <div className="players">
      <div className="playersContainer">
        <div className="playersContainerTitle">
          <h2>Thủ Môn</h2>
        </div>
        <ul className="playersListItem">
          <li className="playersItem">
            <PlayerItem
              img="../../../image/vanloi.jpg"
              number="1"
              surname="Dương"
              firstname="Văn Lợi"
            />
            <PlayerItem
              img="../../../image/268926161_452891393168247_7479250666954465179_n.jpg"
              number="26"
              surname="Huỳnh"
              firstname="Tuấn Linh"
            />
            <PlayerItem
              img="../../../image/vantruong.jpg"
              number="99"
              surname="Lê"
              firstname="Văn Trường"
            />
          </li>
        </ul>
      </div>
      <div className="playersContainer">
        <div className="playersContainerTitle">
          <h2>Hậu vệ</h2>
        </div>
        <ul className="playersListItem">
          <li className="playersItem">
            <PlayerItem
              img="../../../image/275250036_4617448675033737_1292151719923043041_n.jpg"
              number="2"
              surname="Lê"
              firstname="Văn Sơn"
            />
            <PlayerItem
              img="../../../image/273036097_478176507306402_1113042330666088843_n.jpg"
              number="3"
              surname="Kim"
              firstname="Đông Su"
            />
            <PlayerItem
              img="../../../image/273270648_479434763847243_3113828289536401338_n.jpg"
              number="5"
              surname="Trần"
              firstname="Hữu Đông Triều"
            />
            <PlayerItem
              img="../../../image/273580777_480618637062189_1686377481549559679_n.jpg"
              number="7"
              surname="Nguyễn"
              firstname="Phong Hồng Duy"
            />
            <PlayerItem
              img="../../../image/tieuexal.jpg"
              number="12"
              surname="Tiêu"
              firstname="E Xal"
            />
            <PlayerItem
              img="../../../image/273533999_480618627062190_7034619138840446026_n.jpg"
              number="15"
              surname="Nguyễn"
              firstname="Hữu Tuấn"
            />
            <PlayerItem
              img="../../../image/273682335_481086993682020_7302811138983814436_n.jpg"
              number="17"
              surname="Vũ"
              firstname="Văn Thanh"
            />
            <PlayerItem
              img="../../../image/274473238_488440119613374_458284454863438233_n.jpg"
              number="23"
              surname="Nguyễn"
              firstname="Thanh Nhân"
            />
            <PlayerItem
              img="../../../image/xuantruong1.jpg"
              number="27"
              surname="Nguyễn"
              firstname="Văn Triệu"
            />
            <PlayerItem
              img="../../../image/273503504_479868413803878_8433780262978402221_n.jpg"
              number="28"
              surname="Nguyễn"
              firstname="Văn Việt"
            />
            <PlayerItem
              img="../../../image/273211348_479434477180605_7335665928219543745_n.jpg"
              number="66"
              surname="Lê"
              firstname="Đức Lương"
            />
            <PlayerItem
              img="../../../image/xuantruong-thumbnail.png"
              number="82"
              surname="A"
              firstname="Hoàng"
            />
            <PlayerItem
              img="../../../image/271236705_459162189207834_6232449378312081565_n.jpg"
              number="94"
              surname="Barbosa"
              firstname="Teixeira Mouricio"
            />
          </li>
        </ul>
      </div>
      <div className="playersContainer">
        <div className="playersContainerTitle">
          <h2>Tiền vệ</h2>
        </div>
        <ul className="playersListItem">
          <li className="playersItem">
            <PlayerItem
              img="../../../image/xuantruong-thumbnail.png"
              number="6"
              surname="Lương"
              firstname="Xuân Trường"
            />
            <PlayerItem
              img="../../../image/274202615_486617816462271_6196599219316031139_n.jpg"
              number="8"
              surname="Trần"
              firstname="Minh Vương"
            />
            <PlayerItem
              img="../../../image/tuananh-thumbnail.png"
              number="11"
              surname="Nguyễn"
              firstname="Tuấn Anh"
            />
            <PlayerItem
              img="../../../image/xuantruong-thumbnail.png"
              number="21"
              surname="Lê"
              firstname="Huy Kiệt"
            />
            <PlayerItem
              img="../../../image/273426851_123816576835742_4383529337648999927_n.jpg"
              number="24"
              surname="Nguyễn"
              firstname="Đức Việt"
            />
            <PlayerItem
              img="../../../image/274141259_486618009795585_3025316413890900922_n.jpg"
              number="34"
              surname="Lê"
              firstname="Hữu Phước"
            />
            <PlayerItem
              img="../../../image/ndat1763.jpg"
              number="60"
              surname="Võ"
              firstname="Đình Lâm"
            />
          </li>
        </ul>
      </div>
      <div className="playersContainer">
        <div className="playersContainerTitle">
          <h2>Tiền đạo</h2>
        </div>
        <ul className="playersListItem">
          <li className="playersItem">
            <PlayerItem
              img="../../../image/vantoan1.jpg"
              number="9"
              surname="Nguyễn"
              firstname="Văn Toàn"
            />
            <PlayerItem
              img="../../../image/congphuong-thumbnail.png"
              number="10"
              surname="Nguyễn"
              firstname="Công Phượng"
            />
            <PlayerItem
              img="../../../image/274147884_486617833128936_2344549616723964321_n.jpg"
              number="20"
              surname="Trần"
              firstname="Bảo Toàn"
            />
            <PlayerItem
              img="../../../image/274183967_486617916462261_8653496213966284963_n.jpg"
              number="22"
              surname="Nguyễn"
              firstname="Nhi Khang"
            />
            <PlayerItem
              img="../../../image/273201732_479868547137198_1809846395609123261_n.jpg"
              number="30"
              surname="Washington"
              firstname="Brandao Dos Santos"
            />
            <PlayerItem
              img="../../../image/xuantruong-thumbnail.png"
              number="47"
              surname="Cao"
              firstname="Hoàng Tú"
            />
            <PlayerItem
              img="../../../image/274458528_488440082946711_4824138129340461262_n.jpg"
              number="77"
              surname="Huỳnh"
              firstname="Tiến Đạt"
            />
            <PlayerItem
              img="../../../image/274211937_486617979795588_2792326710446150394_n.jpg"
              number="95"
              surname="Jefferson"
              firstname="Silva Dos Santos"
            />
          </li>
        </ul>
      </div>
      <div className="playersContainer">
        <div className="playersContainerTitle">
          <h2>Huấn luyện viên</h2>
        </div>
        <ul className="playersListItem">
          <li className="playersItem">
            <PlayerItem
              img="../../../image/274092029_486617779795608_33659947153684098_n.jpg"
              number=""
              surname="Kiatisuk"
              firstname="Senamuang"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
