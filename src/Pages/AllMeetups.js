import { useEffect, useState } from "react";
import MeetupList from "../Components/meetups/MeetupList";
import { Dummy_Data } from "../Data/DummyData";
import "../Components/layout/Layout.css";
import { Link } from "react-router-dom";

const AllMeetups = () => {
  return (
    <div style={{ backgroundColor: "#243b53" }}>
      <span style={{ display: "flex", overflow: "hidden" }}>
        <img
          style={{ maxWidth: `50%` }}
          className="front-page"
          src="http://sololeveling-manga.net/wp-content/uploads/2020/11/solo-leveling-manga.jpg"
        />
        <img
          className="front-page"
          src="http://sololeveling-manga.net/wp-content/uploads/2020/11/solo-leveling-manga-online.jpg"
        />
      </span>

      <h1 className="title">Solo Leveling</h1>
      <p className="description">
        Solo Leveling (나 혼자만 레벨업, Na Honjaman Lebel-eob) known as I Level
        Up Alone in English is a Korean novel written by Chu-Gong, It was
        serialized in Papyrus and later in KakaoPage and concluded with 14
        volumes and 270 chapters. In April 13, 2018, a webtoon serialization
        started in Korean mobile site KakaoPage drawn by artists Hyeon – Gun and
        Jang Sung-Rak.
      </p>
      <br />
      <h2 className="h2" style={{ textAlign: "left" }}>
        All Chapters
      </h2>
      <div className="div-table">
        <ul>
          <li>
            <Link to={"/Chapters"} state={{ chapter: 1 }}>
              Chapter 1
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 2 }}>
              Chapter 2
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 3 }}>
              Chapter 3
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 4 }}>
              Chapter 4
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 5 }}>
              Chapter 5
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 6 }}>
              Chapter 6
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 7 }}>
              Chapter 7
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 8 }}>
              Chapter 8
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 9 }}>
              Chapter 9
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 10 }}>
              Chapter 10
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 11 }}>
              Chapter 11
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 12 }}>
              Chapter 12
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 13 }}>
              Chapter 13
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 14 }}>
              Chapter 14
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 15 }}>
              Chapter 15
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 16 }}>
              Chapter 16
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 17 }}>
              Chapter 17
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 18 }}>
              Chapter 18
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 19 }}>
              Chapter 19
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 20 }}>
              Chapter 20
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 21 }}>
              Chapter 21
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 22 }}>
              Chapter 22
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 23 }}>
              Chapter 23
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 24 }}>
              Chapter 24
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 25 }}>
              Chapter 25
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 26 }}>
              Chapter 26
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 27 }}>
              Chapter 27
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 28 }}>
              Chapter 28
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 29 }}>
              Chapter 29
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 30 }}>
              Chapter 30
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 31 }}>
              Chapter 31
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 32 }}>
              Chapter 32
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 33 }}>
              Chapter 33
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 34 }}>
              Chapter 34
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 35 }}>
              Chapter 35
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 36 }}>
              Chapter 36
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 37 }}>
              Chapter 37
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 38 }}>
              Chapter 38
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 39 }}>
              Chapter 39
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 40 }}>
              Chapter 40
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 41 }}>
              Chapter 41
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 42 }}>
              Chapter 42
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 43 }}>
              Chapter 43
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 44 }}>
              Chapter 44
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 45 }}>
              Chapter 45
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 46 }}>
              Chapter 46
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 47 }}>
              Chapter 47
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 48 }}>
              Chapter 48
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 49 }}>
              Chapter 49
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 50 }}>
              Chapter 50
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 51 }}>
              Chapter 51
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 52 }}>
              Chapter 52
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 53 }}>
              Chapter 53
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 54 }}>
              Chapter 54
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 55 }}>
              Chapter 55
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 56 }}>
              Chapter 56
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 57 }}>
              Chapter 57
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 58 }}>
              Chapter 58
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 59 }}>
              Chapter 59
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 60 }}>
              Chapter 60
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 61 }}>
              Chapter 61
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 62 }}>
              Chapter 62
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 63 }}>
              Chapter 63
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 64 }}>
              Chapter 64
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 65 }}>
              Chapter 65
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 66 }}>
              Chapter 66
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 67 }}>
              Chapter 67
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 68 }}>
              Chapter 68
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 69 }}>
              Chapter 69
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 70 }}>
              Chapter 70
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 71 }}>
              Chapter 71
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 72 }}>
              Chapter 72
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 73 }}>
              Chapter 73
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 74 }}>
              Chapter 74
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 75 }}>
              Chapter 75
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 76 }}>
              Chapter 76
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 77 }}>
              Chapter 77
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 78 }}>
              Chapter 78
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 79 }}>
              Chapter 79
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 80 }}>
              Chapter 80
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 81 }}>
              Chapter 81
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 82 }}>
              Chapter 82
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 83 }}>
              Chapter 83
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 84 }}>
              Chapter 84
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 85 }}>
              Chapter 85
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 86 }}>
              Chapter 86
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 87 }}>
              Chapter 87
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 88 }}>
              Chapter 88
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 89 }}>
              Chapter 89
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 90 }}>
              Chapter 90
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 91 }}>
              Chapter 91
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 92 }}>
              Chapter 92
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 93 }}>
              Chapter 93
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 94 }}>
              Chapter 94
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 95 }}>
              Chapter 95
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 96 }}>
              Chapter 96
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 97 }}>
              Chapter 97
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 98 }}>
              Chapter 98
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 99 }}>
              Chapter 99
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 100 }}>
              Chapter 100
            </Link>
          </li>
          <li>
            <Link to={"/Chapters"} state={{ chapter: 101 }}>
              Chapter 101
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 102 }}>
              Chapter 102
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 103 }}>
              Chapter 103
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 104 }}>
              Chapter 104
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 105 }}>
              Chapter 105
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 106 }}>
              Chapter 106
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 107 }}>
              Chapter 107
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 108 }}>
              Chapter 108
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 109 }}>
              Chapter 109
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 110 }}>
              Chapter 110
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 111 }}>
              Chapter 111
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 112 }}>
              Chapter 112
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 113 }}>
              Chapter 113
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 114 }}>
              Chapter 114
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 115 }}>
              Chapter 115
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 116 }}>
              Chapter 116
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 117 }}>
              Chapter 117
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 118 }}>
              Chapter 118
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 119 }}>
              Chapter 119
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 120 }}>
              Chapter 120
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 121 }}>
              Chapter 121
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 122 }}>
              Chapter 122
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 123 }}>
              Chapter 123
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 124 }}>
              Chapter 124
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 125 }}>
              Chapter 125
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 126 }}>
              Chapter 126
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 127 }}>
              Chapter 127
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 128 }}>
              Chapter 128
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 129 }}>
              Chapter 129
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 130 }}>
              Chapter 130
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 131 }}>
              Chapter 131
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 132 }}>
              Chapter 132
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 133 }}>
              Chapter 133
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 134 }}>
              Chapter 134
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 135 }}>
              Chapter 135
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 136 }}>
              Chapter 136
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 137 }}>
              Chapter 137
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 138 }}>
              Chapter 138
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 139 }}>
              Chapter 139
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 140 }}>
              Chapter 140
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 141 }}>
              Chapter 141
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 142 }}>
              Chapter 142
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 143 }}>
              Chapter 143
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 144 }}>
              Chapter 144
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 145 }}>
              Chapter 145
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 146 }}>
              Chapter 146
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 147 }}>
              Chapter 147
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 148 }}>
              Chapter 148
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 149 }}>
              Chapter 149
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 150 }}>
              Chapter 150
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 151 }}>
              Chapter 151
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 152 }}>
              Chapter 152
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 153 }}>
              Chapter 153
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 154 }}>
              Chapter 154
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 155 }}>
              Chapter 155
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 156 }}>
              Chapter 156
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 57 }}>
              Chapter 157
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 158 }}>
              Chapter 158
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 159 }}>
              Chapter 159
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 160 }}>
              Chapter 160
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 161 }}>
              Chapter 161
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 162 }}>
              Chapter 162
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 163 }}>
              Chapter 163
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 164 }}>
              Chapter 164
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 165 }}>
              Chapter 165
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 166 }}>
              Chapter 166
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 167 }}>
              Chapter 167
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 168 }}>
              Chapter 168
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 169 }}>
              Chapter 169
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 170 }}>
              Chapter 170
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 171 }}>
              Chapter 171
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 172 }}>
              Chapter 172
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 173 }}>
              Chapter 173
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 174 }}>
              Chapter 174
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 175 }}>
              Chapter 175
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 176 }}>
              Chapter 176
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 177 }}>
              Chapter 177
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 178 }}>
              Chapter 178
            </Link>
          </li>
          <li>
            <Link to="/Chapters" state={{ chapter: 179 }}>
              Chapter 179
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AllMeetups;
