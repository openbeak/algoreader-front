<template>
    <div id="intro">
<!--        <p id="title"><b>Algoreader</b><br>Be a leader by Reading Algorithm</p>-->
        <div id="inputSection">
            <div style="display: flex; flex-direction: row;">
                <input v-model="userId" placeholder="Please Enter your id">
                <button v-on:click="submitId">Submit</button>
            </div>
            <div>
                <p id="description1">If you want to make your own visualization map,<br>please enter your ID.</p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    const dummy2 = [
        {
            "number": 1476,
            "name": "날짜 계산",
            "category": "수학",
            "time": "1908200129",
            "collectCount": 6229,
            "submitCount": 11448,
            "collectRate": 67.64
        },
        {
            "number": 1476,
            "name": "날짜 계산",
            "category": "중국인의 나머지 정리",
            "time": "1908200129",
            "collectCount": 6229,
            "submitCount": 11448,
            "collectRate": 67.64
        },
        {
            "number": 2110,
            "name": "공유기 설치",
            "category": "이분 탐색",
            "time": "1908080147",
            "collectCount": 1995,
            "submitCount": 5740,
            "collectRate": 50.57
        },
        {
            "number": 2447,
            "name": "별 찍기 - 10",
            "category": "None",
            "time": "1907031816",
            "collectCount": 2967,
            "submitCount": 8346,
            "collectRate": 52.588
        },
        {
            "number": 9095,
            "name": "1, 2, 3 더하기",
            "category": "다이나믹 프로그래밍",
            "time": "1907200204",
            "collectCount": 14095,
            "submitCount": 32663,
            "collectRate": 61.989
        },
        {
            "number": 10610,
            "name": "30",
            "category": "그리디 알고리즘",
            "time": "1907011541",
            "collectCount": 3245,
            "submitCount": 11663,
            "collectRate": 35.191
        },
        {
            "number": 10610,
            "name": "30",
            "category": "정수론",
            "time": "1907011541",
            "collectCount": 3245,
            "submitCount": 11663,
            "collectRate": 35.191
        },
        {
            "number": 10819,
            "name": "차이를 최대로",
            "category": "None",
            "time": "1908210150",
            "collectCount": 4079,
            "submitCount": 8779,
            "collectRate": 61.072
        },
        {
            "number": 10972,
            "name": "다음 순열",
            "category": "순열",
            "time": "1908200058",
            "collectCount": 2717,
            "submitCount": 8547,
            "collectRate": 45.664
        },
        {
            "number": 10973,
            "name": "이전 순열",
            "category": "순열",
            "time": "1908200111",
            "collectCount": 2085,
            "submitCount": 3956,
            "collectRate": 66.044
        },
        {
            "number": 11729,
            "name": "하노이 탑 이동 순서",
            "category": "분할 정복",
            "time": "1907031709",
            "collectCount": 3834,
            "submitCount": 9902,
            "collectRate": 51.284
        },
        {
            "number": 12101,
            "name": "1, 2, 3 더하기 2",
            "category": "None",
            "time": "1907200319",
            "collectCount": 280,
            "submitCount": 483,
            "collectRate": 66.194
        },
        {
            "number": 15988,
            "name": "1, 2, 3 더하기 3",
            "category": "None",
            "time": "1907200326",
            "collectCount": 701,
            "submitCount": 2686,
            "collectRate": 34.893
        },
        {
            "number": 15989,
            "name": "1, 2, 3 더하기 4",
            "category": "None",
            "time": "1907200335",
            "collectCount": 299,
            "submitCount": 521,
            "collectRate": 77.865
        },
        {
            "number": 15990,
            "name": "1, 2, 3 더하기 5",
            "category": "None",
            "time": "1907200348",
            "collectCount": 453,
            "submitCount": 1546,
            "collectRate": 37.562
        },
        {
            "number": 15991,
            "name": "1, 2, 3 더하기 6",
            "category": "None",
            "time": "1907200404",
            "collectCount": 132,
            "submitCount": 288,
            "collectRate": 54.098
        },
        {
            "number": 15992,
            "name": "1, 2, 3 더하기 7",
            "category": "None",
            "time": "1907200419",
            "collectCount": 111,
            "submitCount": 193,
            "collectRate": 67.273
        },
        {
            "number": 15993,
            "name": "1, 2, 3 더하기 8",
            "category": "None",
            "time": "1907200434",
            "collectCount": 106,
            "submitCount": 174,
            "collectRate": 70.667
        },
        {
            "number": 17024,
            "name": "Grass Planting",
            "category": "None",
            "time": "1907302239",
            "collectCount": 57,
            "submitCount": 85,
            "collectRate": 73.077
        },
        {
            "number": 17027,
            "name": "Shell Game",
            "category": "None",
            "time": "1907212137",
            "collectCount": 69,
            "submitCount": 109,
            "collectRate": 69.0
        },
        {
            "number": 17028,
            "name": "Sleepy Cow Sorting",
            "category": "None",
            "time": "1907212231",
            "collectCount": 63,
            "submitCount": 126,
            "collectRate": 52.941
        },
        {
            "number": 17029,
            "name": "Guess the Animal",
            "category": "None",
            "time": "1907302117",
            "collectCount": 48,
            "submitCount": 128,
            "collectRate": 53.333
        },
        {
            "number": 1260,
            "name": "DFS와 BFS",
            "category": "BFS",
            "time": "1904041300",
            "collectCount": 13004,
            "submitCount": 71572,
            "collectRate": 29.998
        },
        {
            "number": 1260,
            "name": "DFS와 BFS",
            "category": "DFS",
            "time": "1904041300",
            "collectCount": 13004,
            "submitCount": 71572,
            "collectRate": 29.998
        },
        {
            "number": 1541,
            "name": "잃어버린 괄호",
            "category": "그리디 알고리즘",
            "time": "1904091712",
            "collectCount": 2165,
            "submitCount": 5363,
            "collectRate": 50.549
        },
        {
            "number": 1654,
            "name": "랜선 자르기",
            "category": "이분 탐색",
            "time": "1904121525",
            "collectCount": 3725,
            "submitCount": 30867,
            "collectRate": 18.736
        },
        {
            "number": 1744,
            "name": "수 묶기",
            "category": "None",
            "time": "1907011515",
            "collectCount": 1311,
            "submitCount": 5960,
            "collectRate": 27.49
        },
        {
            "number": 1991,
            "name": "트리 순회",
            "category": "트리",
            "time": "1903272209",
            "collectCount": 5796,
            "submitCount": 12494,
            "collectRate": 62.209
        },
        {
            "number": 2004,
            "name": "조합 0의 개수",
            "category": "수학",
            "time": "1904031647",
            "collectCount": 2221,
            "submitCount": 9956,
            "collectRate": 29.324
        },
        {
            "number": 2004,
            "name": "조합 0의 개수",
            "category": "조합",
            "time": "1904031647",
            "collectCount": 2221,
            "submitCount": 9956,
            "collectRate": 29.324
        },
        {
            "number": 2178,
            "name": "미로 탐색",
            "category": "BFS",
            "time": "1904041855",
            "collectCount": 11884,
            "submitCount": 53826,
            "collectRate": 34.017
        },
        {
            "number": 2225,
            "name": "합분해",
            "category": "다이나믹 프로그래밍",
            "time": "1904022030",
            "collectCount": 3668,
            "submitCount": 11551,
            "collectRate": 42.055
        },
        {
            "number": 2331,
            "name": "반복수열",
            "category": "None",
            "time": "1903261507",
            "collectCount": 1955,
            "submitCount": 6207,
            "collectRate": 42.565
        },
        {
            "number": 2667,
            "name": "단지번호붙이기",
            "category": "BFS",
            "time": "1903261814",
            "collectCount": 9963,
            "submitCount": 38936,
            "collectRate": 38.033
        },
        {
            "number": 2667,
            "name": "단지번호붙이기",
            "category": "DFS",
            "time": "1903261814",
            "collectCount": 9963,
            "submitCount": 38936,
            "collectRate": 38.033
        },
        {
            "number": 2805,
            "name": "나무 자르기",
            "category": "이분 탐색",
            "time": "1904121540",
            "collectCount": 5236,
            "submitCount": 30782,
            "collectRate": 25.432
        },
        {
            "number": 2875,
            "name": "대회 or 인턴",
            "category": "그리디 알고리즘",
            "time": "1907011526",
            "collectCount": 2975,
            "submitCount": 8117,
            "collectRate": 44.133
        },
        {
            "number": 4963,
            "name": "섬의 개수",
            "category": "그래프 이론",
            "time": "1903261833",
            "collectCount": 5195,
            "submitCount": 14334,
            "collectRate": 48.371
        },
        {
            "number": 4963,
            "name": "섬의 개수",
            "category": "그래프 알고리즘",
            "time": "1903261833",
            "collectCount": 5195,
            "submitCount": 14334,
            "collectRate": 48.371
        },
        {
            "number": 10451,
            "name": "순열 사이클",
            "category": "None",
            "time": "1903261406",
            "collectCount": 3931,
            "submitCount": 8580,
            "collectRate": 63.118
        },
        {
            "number": 11399,
            "name": "ATM",
            "category": "그리디 알고리즘",
            "time": "1904091701",
            "collectCount": 9205,
            "submitCount": 16086,
            "collectRate": 68.296
        },
        {
            "number": 11652,
            "name": "카드",
            "category": "정렬",
            "time": "1904032202",
            "collectCount": 2260,
            "submitCount": 11008,
            "collectRate": 27.805
        },
        {
            "number": 11723,
            "name": "집합",
            "category": "None",
            "time": "1906201557",
            "collectCount": 3051,
            "submitCount": 16144,
            "collectRate": 27.812
        },
        {
            "number": 11724,
            "name": "연결 요소의 개수",
            "category": "BFS",
            "time": "1903242114",
            "collectCount": 6244,
            "submitCount": 19032,
            "collectRate": 47.125
        },
        {
            "number": 11724,
            "name": "연결 요소의 개수",
            "category": "DFS",
            "time": "1903242114",
            "collectCount": 6244,
            "submitCount": 19032,
            "collectRate": 47.125
        },
        {
            "number": 11725,
            "name": "트리의 부모 찾기",
            "category": "None",
            "time": "1904081613",
            "collectCount": 2523,
            "submitCount": 8196,
            "collectRate": 43.055
        },
        {
            "number": 11728,
            "name": "배열 합치기",
            "category": "None",
            "time": "1904092032",
            "collectCount": 2267,
            "submitCount": 7609,
            "collectRate": 44.882
        },
        {
            "number": 1212,
            "name": "8진수 2진수",
            "category": "진법",
            "time": "1903182015",
            "collectCount": 2953,
            "submitCount": 13591,
            "collectRate": 30.525
        },
        {
            "number": 1373,
            "name": "2진수 8진수",
            "category": "None",
            "time": "1903181627",
            "collectCount": 2893,
            "submitCount": 10499,
            "collectRate": 37.802
        },
        {
            "number": 1699,
            "name": "제곱수의 합",
            "category": "다이나믹 프로그래밍",
            "time": "1903151656",
            "collectCount": 5039,
            "submitCount": 16459,
            "collectRate": 41.178
        },
        {
            "number": 1699,
            "name": "제곱수의 합",
            "category": "냅색",
            "time": "1903151656",
            "collectCount": 5039,
            "submitCount": 16459,
            "collectRate": 41.178
        },
        {
            "number": 1912,
            "name": "연속합",
            "category": "다이나믹 프로그래밍",
            "time": "1903141503",
            "collectCount": 9780,
            "submitCount": 51250,
            "collectRate": 27.109
        },
        {
            "number": 1912,
            "name": "연속합",
            "category": "수학",
            "time": "1903141503",
            "collectCount": 9780,
            "submitCount": 51250,
            "collectRate": 27.109
        },
        {
            "number": 1929,
            "name": "소수 구하기",
            "category": "에라토스테네스의 체",
            "time": "1903191359",
            "collectCount": 8542,
            "submitCount": 43137,
            "collectRate": 28.382
        },
        {
            "number": 1934,
            "name": "최소공배수",
            "category": "유클리드 호제법",
            "time": "1903181353",
            "collectCount": 7799,
            "submitCount": 16193,
            "collectRate": 58.958
        },
        {
            "number": 1978,
            "name": "소수 찾기",
            "category": "수학",
            "time": "1903191353",
            "collectCount": 12491,
            "submitCount": 32464,
            "collectRate": 48.969
        },
        {
            "number": 1978,
            "name": "소수 찾기",
            "category": "에라토스테네스의 체",
            "time": "1903191353",
            "collectCount": 12491,
            "submitCount": 32464,
            "collectRate": 48.969
        },
        {
            "number": 2089,
            "name": "-2진수",
            "category": "None",
            "time": "1903191327",
            "collectCount": 1024,
            "submitCount": 2667,
            "collectRate": 45.653
        },
        {
            "number": 2133,
            "name": "타일 채우기",
            "category": "다이나믹 프로그래밍",
            "time": "1903151736",
            "collectCount": 4806,
            "submitCount": 17454,
            "collectRate": 35.626
        },
        {
            "number": 2579,
            "name": "계단 오르기",
            "category": "다이나믹 프로그래밍",
            "time": "1903131650",
            "collectCount": 12909,
            "submitCount": 44262,
            "collectRate": 39.197
        },
        {
            "number": 2609,
            "name": "최대공약수와 최소공배수",
            "category": "None",
            "time": "1903181350",
            "collectCount": 9709,
            "submitCount": 18385,
            "collectRate": 66.259
        },
        {
            "number": 2751,
            "name": "수 정렬하기 2",
            "category": "None",
            "time": "1903201547",
            "collectCount": 9478,
            "submitCount": 51601,
            "collectRate": 32.347
        },
        {
            "number": 6588,
            "name": "골드바흐의 추측",
            "category": "정수론",
            "time": "1903191415",
            "collectCount": 3437,
            "submitCount": 18271,
            "collectRate": 26.766
        },
        {
            "number": 6588,
            "name": "골드바흐의 추측",
            "category": "에라토스테네스의 체",
            "time": "1903191415",
            "collectCount": 3437,
            "submitCount": 18271,
            "collectRate": 26.766
        },
        {
            "number": 9613,
            "name": "GCD 합",
            "category": "None",
            "time": "1903181546",
            "collectCount": 2480,
            "submitCount": 8979,
            "collectRate": 37.248
        },
        {
            "number": 10814,
            "name": "나이순 정렬",
            "category": "정렬",
            "time": "1903201625",
            "collectCount": 4130,
            "submitCount": 13764,
            "collectRate": 41.583
        },
        {
            "number": 11004,
            "name": "K번째 수",
            "category": "정렬",
            "time": "1903211904",
            "collectCount": 3972,
            "submitCount": 22676,
            "collectRate": 37.532
        },
        {
            "number": 11005,
            "name": "진법 변환 2",
            "category": "진법",
            "time": "1903181558",
            "collectCount": 2525,
            "submitCount": 5938,
            "collectRate": 52.31
        },
        {
            "number": 11054,
            "name": "가장 긴 바이토닉 부분 수열",
            "category": "다이나믹 프로그래밍",
            "time": "1903131627",
            "collectCount": 3724,
            "submitCount": 8812,
            "collectRate": 53.691
        },
        {
            "number": 11576,
            "name": "Base Conversion",
            "category": "None",
            "time": "1903191348",
            "collectCount": 1448,
            "submitCount": 3090,
            "collectRate": 57.943
        },
        {
            "number": 11650,
            "name": "좌표 정렬하기",
            "category": "정렬",
            "time": "1903201608",
            "collectCount": 5287,
            "submitCount": 13880,
            "collectRate": 51.151
        },
        {
            "number": 1158,
            "name": "조세퍼스 문제",
            "category": "링크드 리스트",
            "time": "1903090040",
            "collectCount": 7875,
            "submitCount": 21600,
            "collectRate": 50.31
        },
        {
            "number": 1406,
            "name": "에디터",
            "category": "링크드 리스트",
            "time": "1903090002",
            "collectCount": 3831,
            "submitCount": 23337,
            "collectRate": 25.713
        },
        {
            "number": 1463,
            "name": "1로 만들기",
            "category": "다이나믹 프로그래밍",
            "time": "1903092132",
            "collectCount": 16972,
            "submitCount": 81374,
            "collectRate": 32.16
        },
        {
            "number": 1924,
            "name": "2007년",
            "category": "구현",
            "time": "1903061614",
            "collectCount": 23169,
            "submitCount": 63028,
            "collectRate": 44.469
        },
        {
            "number": 2156,
            "name": "포도주 시식",
            "category": "다이나믹 프로그래밍",
            "time": "1903131317",
            "collectCount": 10011,
            "submitCount": 38803,
            "collectRate": 34.521
        },
        {
            "number": 9012,
            "name": "괄호",
            "category": "스택",
            "time": "1903081446",
            "collectCount": 12995,
            "submitCount": 44598,
            "collectRate": 39.071
        },
        {
            "number": 9095,
            "name": "1, 2, 3 더하기",
            "category": "다이나믹 프로그래밍",
            "time": "1903092153",
            "collectCount": 14095,
            "submitCount": 32663,
            "collectRate": 61.989
        },
        {
            "number": 10799,
            "name": "쇠막대기",
            "category": "스택",
            "time": "1903081616",
            "collectCount": 6438,
            "submitCount": 14739,
            "collectRate": 60.445
        },
        {
            "number": 10820,
            "name": "문자열 분석",
            "category": "None",
            "time": "1903090101",
            "collectCount": 3220,
            "submitCount": 9385,
            "collectRate": 43.071
        },
        {
            "number": 10844,
            "name": "쉬운 계단 수",
            "category": "다이나믹 프로그래밍",
            "time": "1903131305",
            "collectCount": 9196,
            "submitCount": 42429,
            "collectRate": 28.261
        },
        {
            "number": 10951,
            "name": "A+B - 4",
            "category": "사칙연산",
            "time": "1903061109",
            "collectCount": 10513,
            "submitCount": 32489,
            "collectRate": 40.183
        },
        {
            "number": 10952,
            "name": "A+B - 5",
            "category": "사칙연산",
            "time": "1903061346",
            "collectCount": 11666,
            "submitCount": 21527,
            "collectRate": 60.672
        },
        {
            "number": 10953,
            "name": "A+B - 6",
            "category": "사칙연산",
            "time": "1903061353",
            "collectCount": 7399,
            "submitCount": 12994,
            "collectRate": 66.004
        },
        {
            "number": 11052,
            "name": "카드 구매하기",
            "category": "다이나믹 프로그래밍",
            "time": "1903131253",
            "collectCount": 7927,
            "submitCount": 18117,
            "collectRate": 59.414
        },
        {
            "number": 11053,
            "name": "가장 긴 증가하는 부분 수열",
            "category": "다이나믹 프로그래밍",
            "time": "1903131557",
            "collectCount": 8464,
            "submitCount": 33326,
            "collectRate": 37.006
        },
        {
            "number": 11055,
            "name": "가장 큰 증가 부분 수열",
            "category": "다이나믹 프로그래밍",
            "time": "1903131607",
            "collectCount": 4925,
            "submitCount": 13307,
            "collectRate": 47.062
        },
        {
            "number": 11719,
            "name": "그대로 출력하기 2",
            "category": "출력",
            "time": "1903061546",
            "collectCount": 19750,
            "submitCount": 43708,
            "collectRate": 57.056
        },
        {
            "number": 11720,
            "name": "숫자의 합",
            "category": "출력",
            "time": "1903061553",
            "collectCount": 21273,
            "submitCount": 54971,
            "collectRate": 47.052
        },
        {
            "number": 11722,
            "name": "가장 긴 감소하는 부분 수열",
            "category": "다이나믹 프로그래밍",
            "time": "1903131613",
            "collectCount": 4426,
            "submitCount": 8557,
            "collectRate": 64.964
        },
        {
            "number": 11726,
            "name": "2×n 타일링",
            "category": "다이나믹 프로그래밍",
            "time": "1903092141",
            "collectCount": 11855,
            "submitCount": 43148,
            "collectRate": 34.765
        },
        {
            "number": 1000,
            "name": "A+B",
            "category": "수학",
            "time": "1903061043",
            "collectCount": 70285,
            "submitCount": 217609,
            "collectRate": 45.165
        },
        {
            "number": 1062,
            "name": "가르침",
            "category": "브루트 포스",
            "time": "1811201340",
            "collectCount": 843,
            "submitCount": 6019,
            "collectRate": 23.09
        },
        {
            "number": 1062,
            "name": "가르침",
            "category": "시뮬레이션",
            "time": "1811201340",
            "collectCount": 843,
            "submitCount": 6019,
            "collectRate": 23.09
        },
        {
            "number": 1062,
            "name": "가르침",
            "category": "문자열 처리",
            "time": "1811201340",
            "collectCount": 843,
            "submitCount": 6019,
            "collectRate": 23.09
        },
        {
            "number": 1371,
            "name": "가장 많은 글자",
            "category": "문자열 처리",
            "time": "1811271524",
            "collectCount": 1170,
            "submitCount": 3840,
            "collectRate": 37.061
        },
        {
            "number": 1405,
            "name": "미친 로봇",
            "category": "브루트 포스",
            "time": "1811051627",
            "collectCount": 802,
            "submitCount": 3508,
            "collectRate": 31.134
        },
        {
            "number": 1405,
            "name": "미친 로봇",
            "category": "탐색",
            "time": "1811051627",
            "collectCount": 802,
            "submitCount": 3508,
            "collectRate": 31.134
        },
        {
            "number": 1405,
            "name": "미친 로봇",
            "category": "DFS",
            "time": "1811051627",
            "collectCount": 802,
            "submitCount": 3508,
            "collectRate": 31.134
        },
        {
            "number": 1475,
            "name": "방 번호",
            "category": "수학",
            "time": "1811251208",
            "collectCount": 7675,
            "submitCount": 23721,
            "collectRate": 38.922
        },
        {
            "number": 1475,
            "name": "방 번호",
            "category": "문자열 처리",
            "time": "1811251208",
            "collectCount": 7675,
            "submitCount": 23721,
            "collectRate": 38.922
        },
        {
            "number": 1520,
            "name": "내리막 길",
            "category": "다이나믹 프로그래밍",
            "time": "1811191526",
            "collectCount": 4076,
            "submitCount": 23611,
            "collectRate": 26.954
        },
        {
            "number": 1613,
            "name": "역사",
            "category": "BFS",
            "time": "1811061212",
            "collectCount": 1303,
            "submitCount": 6016,
            "collectRate": 31.277
        },
        {
            "number": 1613,
            "name": "역사",
            "category": "DFS",
            "time": "1811061212",
            "collectCount": 1303,
            "submitCount": 6016,
            "collectRate": 31.277
        },
        {
            "number": 1613,
            "name": "역사",
            "category": "플로이드 와샬 알고리즘",
            "time": "1811061212",
            "collectCount": 1303,
            "submitCount": 6016,
            "collectRate": 31.277
        },
        {
            "number": 1764,
            "name": "듣보잡",
            "category": "구현",
            "time": "1811261048",
            "collectCount": 3238,
            "submitCount": 12039,
            "collectRate": 39.392
        },
        {
            "number": 1764,
            "name": "듣보잡",
            "category": "문자열 처리",
            "time": "1811261048",
            "collectCount": 3238,
            "submitCount": 12039,
            "collectRate": 39.392
        },
        {
            "number": 1799,
            "name": "비숍",
            "category": "백트래킹",
            "time": "1811131752",
            "collectCount": 1111,
            "submitCount": 7098,
            "collectRate": 24.755
        },
        {
            "number": 2193,
            "name": "이친수",
            "category": "다이나믹 프로그래밍",
            "time": "1811141816",
            "collectCount": 11012,
            "submitCount": 38721,
            "collectRate": 36.449
        },
        {
            "number": 2558,
            "name": "A+B - 2",
            "category": "None",
            "time": "1903061048",
            "collectCount": 26620,
            "submitCount": 39633,
            "collectRate": 75.374
        },
        {
            "number": 3190,
            "name": "뱀",
            "category": "시뮬레이션",
            "time": "1811121757",
            "collectCount": 3632,
            "submitCount": 17111,
            "collectRate": 30.529
        },
        {
            "number": 5397,
            "name": "키로거",
            "category": "시뮬레이션",
            "time": "1811131557",
            "collectCount": 1811,
            "submitCount": 11973,
            "collectRate": 23.544
        },
        {
            "number": 5397,
            "name": "키로거",
            "category": "배열",
            "time": "1811131557",
            "collectCount": 1811,
            "submitCount": 11973,
            "collectRate": 23.544
        },
        {
            "number": 5397,
            "name": "키로거",
            "category": "스택",
            "time": "1811131557",
            "collectCount": 1811,
            "submitCount": 11973,
            "collectRate": 23.544
        },
        {
            "number": 5397,
            "name": "키로거",
            "category": "링크드 리스트",
            "time": "1811131557",
            "collectCount": 1811,
            "submitCount": 11973,
            "collectRate": 23.544
        },
        {
            "number": 7562,
            "name": "나이트의 이동",
            "category": "BFS",
            "time": "1811051320",
            "collectCount": 4349,
            "submitCount": 12978,
            "collectRate": 43.836
        },
        {
            "number": 9461,
            "name": "파도반 수열",
            "category": "다이나믹 프로그래밍",
            "time": "1811141826",
            "collectCount": 7120,
            "submitCount": 21606,
            "collectRate": 38.74
        },
        {
            "number": 9933,
            "name": "민균이의 비밀번호",
            "category": "문자열 처리",
            "time": "1811251246",
            "collectCount": 1245,
            "submitCount": 4638,
            "collectRate": 32.515
        },
        {
            "number": 9996,
            "name": "한국이 그리울 땐 서버에 접속하지",
            "category": "문자열 처리",
            "time": "1811261046",
            "collectCount": 708,
            "submitCount": 3301,
            "collectRate": 27.57
        },
        {
            "number": 10950,
            "name": "A+B - 3",
            "category": "사칙연산",
            "time": "1903061055",
            "collectCount": 14094,
            "submitCount": 26184,
            "collectRate": 61.756
        },
        {
            "number": 11057,
            "name": "오르막 수",
            "category": "다이나믹 프로그래밍",
            "time": "1811191221",
            "collectCount": 6483,
            "submitCount": 17249,
            "collectRate": 47.29
        },
        {
            "number": 15686,
            "name": "치킨 배달",
            "category": "브루트 포스",
            "time": "1811281755",
            "collectCount": 3470,
            "submitCount": 14781,
            "collectRate": 37.986
        },
        {
            "number": 1707,
            "name": "이분 그래프",
            "category": "BFS",
            "time": "1811021103",
            "collectCount": 3077,
            "submitCount": 22217,
            "collectRate": 21.806
        },
        {
            "number": 1707,
            "name": "이분 그래프",
            "category": "DFS",
            "time": "1811021103",
            "collectCount": 3077,
            "submitCount": 22217,
            "collectRate": 21.806
        },
        {
            "number": 1764,
            "name": "듣보잡",
            "category": "구현",
            "time": "1810221255",
            "collectCount": 3238,
            "submitCount": 12039,
            "collectRate": 39.392
        },
        {
            "number": 1764,
            "name": "듣보잡",
            "category": "문자열 처리",
            "time": "1810221255",
            "collectCount": 3238,
            "submitCount": 12039,
            "collectRate": 39.392
        },
        {
            "number": 1865,
            "name": "웜홀",
            "category": "벨만-포드 알고리즘",
            "time": "1810301509",
            "collectCount": 1456,
            "submitCount": 6775,
            "collectRate": 30.55
        },
        {
            "number": 1931,
            "name": "회의실배정",
            "category": "그리디 알고리즘",
            "time": "1810221722",
            "collectCount": 6034,
            "submitCount": 29183,
            "collectRate": 28.736
        },
        {
            "number": 1937,
            "name": "욕심쟁이 판다",
            "category": "다이나믹 프로그래밍",
            "time": "1810232101",
            "collectCount": 3154,
            "submitCount": 16057,
            "collectRate": 29.299
        },
        {
            "number": 1937,
            "name": "욕심쟁이 판다",
            "category": "정렬",
            "time": "1810232101",
            "collectCount": 3154,
            "submitCount": 16057,
            "collectRate": 29.299
        },
        {
            "number": 1937,
            "name": "욕심쟁이 판다",
            "category": "LIS",
            "time": "1810232101",
            "collectCount": 3154,
            "submitCount": 16057,
            "collectRate": 29.299
        },
        {
            "number": 1965,
            "name": "상자넣기",
            "category": "다이나믹 프로그래밍",
            "time": "1809301321",
            "collectCount": 3257,
            "submitCount": 8970,
            "collectRate": 46.212
        },
        {
            "number": 1965,
            "name": "상자넣기",
            "category": "LIS",
            "time": "1809301321",
            "collectCount": 3257,
            "submitCount": 8970,
            "collectRate": 46.212
        },
        {
            "number": 2042,
            "name": "구간 합 구하기",
            "category": "세그먼트 트리",
            "time": "1810151608",
            "collectCount": 4458,
            "submitCount": 27564,
            "collectRate": 29.071
        },
        {
            "number": 2042,
            "name": "구간 합 구하기",
            "category": "인덱스 트리",
            "time": "1810151608",
            "collectCount": 4458,
            "submitCount": 27564,
            "collectRate": 29.071
        },
        {
            "number": 2163,
            "name": "초콜릿 자르기",
            "category": "다이나믹 프로그래밍",
            "time": "1809301224",
            "collectCount": 7128,
            "submitCount": 11710,
            "collectRate": 72.058
        },
        {
            "number": 2163,
            "name": "초콜릿 자르기",
            "category": "수학",
            "time": "1809301224",
            "collectCount": 7128,
            "submitCount": 11710,
            "collectRate": 72.058
        },
        {
            "number": 2805,
            "name": "나무 자르기",
            "category": "이분 탐색",
            "time": "1810220946",
            "collectCount": 5236,
            "submitCount": 30782,
            "collectRate": 25.432
        },
        {
            "number": 5014,
            "name": "스타트링크",
            "category": "BFS",
            "time": "1811021433",
            "collectCount": 3053,
            "submitCount": 11512,
            "collectRate": 34.737
        },
        {
            "number": 9465,
            "name": "스티커",
            "category": "다이나믹 프로그래밍",
            "time": "1809291538",
            "collectCount": 7024,
            "submitCount": 22208,
            "collectRate": 47.877
        },
        {
            "number": 10816,
            "name": "숫자 카드 2",
            "category": "이분 탐색",
            "time": "1810221011",
            "collectCount": 2322,
            "submitCount": 11035,
            "collectRate": 33.75
        },
        {
            "number": 10825,
            "name": "국영수",
            "category": "정렬",
            "time": "1810221339",
            "collectCount": 3054,
            "submitCount": 9228,
            "collectRate": 46.182
        },
        {
            "number": 11047,
            "name": "동전 0",
            "category": "그리디 알고리즘",
            "time": "1810071227",
            "collectCount": 7996,
            "submitCount": 17686,
            "collectRate": 55.932
        },
        {
            "number": 11047,
            "name": "동전 0",
            "category": "동전 교환",
            "time": "1810071227",
            "collectCount": 7996,
            "submitCount": 17686,
            "collectRate": 55.932
        },
        {
            "number": 11051,
            "name": "이항 계수 2",
            "category": "다이나믹 프로그래밍",
            "time": "1809301348",
            "collectCount": 4911,
            "submitCount": 16469,
            "collectRate": 38.697
        },
        {
            "number": 11727,
            "name": "2×n 타일링 2",
            "category": "다이나믹 프로그래밍",
            "time": "1809301232",
            "collectCount": 8886,
            "submitCount": 18447,
            "collectRate": 59.968
        },
        {
            "number": 14890,
            "name": "경사로",
            "category": "시뮬레이션",
            "time": "1810151118",
            "collectCount": 2898,
            "submitCount": 7851,
            "collectRate": 51.256
        },
        {
            "number": 15683,
            "name": "감시",
            "category": "브루트 포스",
            "time": "1810141413",
            "collectCount": 2647,
            "submitCount": 10803,
            "collectRate": 38.169
        },
        {
            "number": 1000,
            "name": "A+B",
            "category": "수학",
            "time": "1809061718",
            "collectCount": 70285,
            "submitCount": 217609,
            "collectRate": 45.165
        },
        {
            "number": 1065,
            "name": "한수",
            "category": "브루트 포스",
            "time": "1809051459",
            "collectCount": 14024,
            "submitCount": 34905,
            "collectRate": 47.206
        },
        {
            "number": 1065,
            "name": "한수",
            "category": "탐색",
            "time": "1809051459",
            "collectCount": 14024,
            "submitCount": 34905,
            "collectRate": 47.206
        },
        {
            "number": 1463,
            "name": "1로 만들기",
            "category": "다이나믹 프로그래밍",
            "time": "1809291042",
            "collectCount": 16972,
            "submitCount": 81374,
            "collectRate": 32.16
        },
        {
            "number": 1759,
            "name": "암호 만들기",
            "category": "백트래킹",
            "time": "1809091306",
            "collectCount": 4694,
            "submitCount": 14800,
            "collectRate": 44.2
        },
        {
            "number": 1966,
            "name": "프린터 큐",
            "category": "브루트 포스",
            "time": "1809162107",
            "collectCount": 5161,
            "submitCount": 12747,
            "collectRate": 52.977
        },
        {
            "number": 1966,
            "name": "프린터 큐",
            "category": "시뮬레이션",
            "time": "1809162107",
            "collectCount": 5161,
            "submitCount": 12747,
            "collectRate": 52.977
        },
        {
            "number": 1966,
            "name": "프린터 큐",
            "category": "큐",
            "time": "1809162107",
            "collectCount": 5161,
            "submitCount": 12747,
            "collectRate": 52.977
        },
        {
            "number": 1987,
            "name": "알파벳",
            "category": "DFS",
            "time": "1809112112",
            "collectCount": 5130,
            "submitCount": 24722,
            "collectRate": 31.267
        },
        {
            "number": 1987,
            "name": "알파벳",
            "category": "백트래킹",
            "time": "1809112112",
            "collectCount": 5130,
            "submitCount": 24722,
            "collectRate": 31.267
        },
        {
            "number": 2023,
            "name": "신기한 소수",
            "category": "백트래킹",
            "time": "1809101803",
            "collectCount": 895,
            "submitCount": 2516,
            "collectRate": 48.378
        },
        {
            "number": 2667,
            "name": "단지번호붙이기",
            "category": "BFS",
            "time": "1808281818",
            "collectCount": 9963,
            "submitCount": 38936,
            "collectRate": 38.033
        },
        {
            "number": 2667,
            "name": "단지번호붙이기",
            "category": "DFS",
            "time": "1808281818",
            "collectCount": 9963,
            "submitCount": 38936,
            "collectRate": 38.033
        },
        {
            "number": 2805,
            "name": "나무 자르기",
            "category": "이분 탐색",
            "time": "1809191719",
            "collectCount": 5236,
            "submitCount": 30782,
            "collectRate": 25.432
        },
        {
            "number": 5532,
            "name": "방학 숙제",
            "category": "구현",
            "time": "1809161158",
            "collectCount": 2183,
            "submitCount": 3731,
            "collectRate": 65.379
        },
        {
            "number": 5532,
            "name": "방학 숙제",
            "category": "시뮬레이션",
            "time": "1809161158",
            "collectCount": 2183,
            "submitCount": 3731,
            "collectRate": 65.379
        },
        {
            "number": 5557,
            "name": "1학년",
            "category": "다이나믹 프로그래밍",
            "time": "1809211745",
            "collectCount": 2128,
            "submitCount": 7676,
            "collectRate": 35.711
        },
        {
            "number": 5557,
            "name": "1학년",
            "category": "조합론",
            "time": "1809211745",
            "collectCount": 2128,
            "submitCount": 7676,
            "collectRate": 35.711
        },
        {
            "number": 7576,
            "name": "토마토",
            "category": "BFS",
            "time": "1809031352",
            "collectCount": 9752,
            "submitCount": 49813,
            "collectRate": 30.095
        },
        {
            "number": 9205,
            "name": "맥주 마시면서 걸어가기",
            "category": "BFS",
            "time": "1809022228",
            "collectCount": 1150,
            "submitCount": 4813,
            "collectRate": 32.087
        },
        {
            "number": 9205,
            "name": "맥주 마시면서 걸어가기",
            "category": "DFS",
            "time": "1809022228",
            "collectCount": 1150,
            "submitCount": 4813,
            "collectRate": 32.087
        },
        {
            "number": 9205,
            "name": "맥주 마시면서 걸어가기",
            "category": "플로이드 와샬 알고리즘",
            "time": "1809022228",
            "collectCount": 1150,
            "submitCount": 4813,
            "collectRate": 32.087
        },
        {
            "number": 9372,
            "name": "상근이의 여행",
            "category": "BFS",
            "time": "1808311444",
            "collectCount": 1382,
            "submitCount": 3087,
            "collectRate": 61.614
        },
        {
            "number": 9372,
            "name": "상근이의 여행",
            "category": "최소 스패닝 트리",
            "time": "1808311444",
            "collectCount": 1382,
            "submitCount": 3087,
            "collectRate": 61.614
        },
        {
            "number": 9663,
            "name": "N-Queen",
            "category": "백트래킹",
            "time": "1809071651",
            "collectCount": 5244,
            "submitCount": 13967,
            "collectRate": 57.563
        },
        {
            "number": 10828,
            "name": "스택",
            "category": "스택",
            "time": "1809211537",
            "collectCount": 14320,
            "submitCount": 50782,
            "collectRate": 40.693
        },
        {
            "number": 10974,
            "name": "모든 순열",
            "category": "순열",
            "time": "1809061654",
            "collectCount": 3801,
            "submitCount": 9177,
            "collectRate": 57.539
        },
        {
            "number": 11726,
            "name": "2×n 타일링",
            "category": "다이나믹 프로그래밍",
            "time": "1809291508",
            "collectCount": 11855,
            "submitCount": 43148,
            "collectRate": 34.765
        },
        {
            "number": 14503,
            "name": "로봇 청소기",
            "category": "시뮬레이션",
            "time": "1809181440",
            "collectCount": 4829,
            "submitCount": 14774,
            "collectRate": 49.696
        },
        {
            "number": 1504,
            "name": "특정한 최단 경로",
            "category": "다익스트라 알고리즘",
            "time": "1808191131",
            "collectCount": 2366,
            "submitCount": 14579,
            "collectRate": 23.013
        },
        {
            "number": 1766,
            "name": "문제집",
            "category": "위상 정렬",
            "time": "1808211206",
            "collectCount": 1987,
            "submitCount": 5828,
            "collectRate": 46.07
        },
        {
            "number": 1766,
            "name": "문제집",
            "category": "힙",
            "time": "1808211206",
            "collectCount": 1987,
            "submitCount": 5828,
            "collectRate": 46.07
        },
        {
            "number": 1786,
            "name": "찾기",
            "category": "KMP",
            "time": "1808131150",
            "collectCount": 1517,
            "submitCount": 11609,
            "collectRate": 25.634
        },
        {
            "number": 1920,
            "name": "수 찾기",
            "category": "이분 탐색",
            "time": "1808031251",
            "collectCount": 6757,
            "submitCount": 37889,
            "collectRate": 27.975
        },
        {
            "number": 2252,
            "name": "줄 세우기",
            "category": "위상 정렬",
            "time": "1808201515",
            "collectCount": 3627,
            "submitCount": 10619,
            "collectRate": 51.171
        },
        {
            "number": 2252,
            "name": "줄 세우기",
            "category": "우선 순위 큐",
            "time": "1808201515",
            "collectCount": 3627,
            "submitCount": 10619,
            "collectRate": 51.171
        },
        {
            "number": 2557,
            "name": "Hello World",
            "category": "출력",
            "time": "1801150604",
            "collectCount": 68909,
            "submitCount": 190107,
            "collectRate": 46.946
        },
        {
            "number": 2750,
            "name": "수 정렬하기",
            "category": "None",
            "time": "1808011514",
            "collectCount": 16226,
            "submitCount": 40028,
            "collectRate": 58.365
        },
        {
            "number": 2751,
            "name": "수 정렬하기 2",
            "category": "None",
            "time": "1808021201",
            "collectCount": 9478,
            "submitCount": 51601,
            "collectRate": 32.347
        },
        {
            "number": 6603,
            "name": "로또",
            "category": "BFS",
            "time": "1808281039",
            "collectCount": 5869,
            "submitCount": 15826,
            "collectRate": 53.569
        },
        {
            "number": 6603,
            "name": "로또",
            "category": "브루트 포스",
            "time": "1808281039",
            "collectCount": 5869,
            "submitCount": 15826,
            "collectRate": 53.569
        },
        {
            "number": 6603,
            "name": "로또",
            "category": "DFS",
            "time": "1808281039",
            "collectCount": 5869,
            "submitCount": 15826,
            "collectRate": 53.569
        },
        {
            "number": 6603,
            "name": "로또",
            "category": "백트래킹",
            "time": "1808281039",
            "collectCount": 5869,
            "submitCount": 15826,
            "collectRate": 53.569
        },
        {
            "number": 6603,
            "name": "로또",
            "category": "입문용",
            "time": "1808281039",
            "collectCount": 5869,
            "submitCount": 15826,
            "collectRate": 53.569
        },
        {
            "number": 10815,
            "name": "숫자 카드",
            "category": "이분 탐색",
            "time": "1808061250",
            "collectCount": 5285,
            "submitCount": 16496,
            "collectRate": 47.357
        },
        {
            "number": 10989,
            "name": "수 정렬하기 3",
            "category": "정렬",
            "time": "1808061658",
            "collectCount": 6932,
            "submitCount": 44301,
            "collectRate": 23.07
        },
        {
            "number": 11403,
            "name": "경로 찾기",
            "category": "BFS",
            "time": "1808241613",
            "collectCount": 6944,
            "submitCount": 19156,
            "collectRate": 51.025
        },
        {
            "number": 11403,
            "name": "경로 찾기",
            "category": "DFS",
            "time": "1808241613",
            "collectCount": 6944,
            "submitCount": 19156,
            "collectRate": 51.025
        },
        {
            "number": 11403,
            "name": "경로 찾기",
            "category": "플로이드 와샬 알고리즘",
            "time": "1808241613",
            "collectCount": 6944,
            "submitCount": 19156,
            "collectRate": 51.025
        }
    ]

    const dummy = [
        {
            'number': 1,
            'name': '더미 문제1',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19032118
        },
        {
            'number': 3,
            'name': '더미 문제2',
            'category': 'Greedy',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19032116
        },
        {
            'number': 8,
            'name': '더미 문제3',
            'category': 'BFS',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':19032130
        },
        {
            'number': 11,
            'name': '더미 문제4',
            'category': 'Simulation',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19032150
        },
        {
            'number': 18,
            'name': '더미 문제5',
            'category': 'Brute Force',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19032121
        },
        {
            'number': 21,
            'name': '더미 문제6',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19032114
        },
        {
            'number': 23,
            'name': '더미 문제7',
            'category': 'DFS',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19032154
        },
        {
            'number': 28,
            'name': '더미 문제8',
            'category': 'Greedy',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':19032134
        },
        {
            'number': 31,
            'name': '더미 문제9',
            'category': 'Simulation',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19032122
        },
        {
            'number': 38,
            'name': '더미 문제10',
            'category': 'Dynamic Programming',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19032111
        },
        {
            'number': 41,
            'name': '더미 문제1',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19012118
        },
        {
            'number': 43,
            'name': '더미 문제2',
            'category': 'Greedy',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19052116
        },
        {
            'number': 48,
            'name': '더미 문제3',
            'category': 'BFS',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':19052130
        },
        {
            'number': 51,
            'name': '더미 문제4',
            'category': 'Simulation',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19022150
        },
        {
            'number': 58,
            'name': '더미 문제5',
            'category': 'Sorting',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19042121
        },
        {
            'number': 61,
            'name': '더미 문제6',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19042114
        },
        {
            'number': 63,
            'name': '더미 문제7',
            'category': 'Binary Search',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19032154
        },
        {
            'number': 68,
            'name': '더미 문제8',
            'category': 'Greedy',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':19032134
        },
        {
            'number': 71,
            'name': '더미 문제9',
            'category': 'Binary Search',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19032122
        },
        {
            'number': 78,
            'name': '더미 문제10',
            'category': 'Dynamic Programming',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19032111
        },
        {
            'number': 101,
            'name': '더미 문제1',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':18112118
        },
        {
            'number': 103,
            'name': '더미 문제2',
            'category': 'Greedy',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':18072116
        },
        {
            'number': 108,
            'name': '더미 문제3',
            'category': 'Math',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':18042130
        },
        {
            'number': 111,
            'name': '더미 문제4',
            'category': 'Simulation',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19102150
        },
        {
            'number': 118,
            'name': '더미 문제5',
            'category': 'Brute Force',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':18122121
        },
        {
            'number': 121,
            'name': '더미 문제6',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19082114
        },
        {
            'number': 123,
            'name': '더미 문제7',
            'category': 'DFS',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19032154
        },
        {
            'number': 128,
            'name': '더미 문제8',
            'category': 'Greedy',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':18062134
        },
        {
            'number': 131,
            'name': '더미 문제9',
            'category': 'Math',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':18052122
        },
        {
            'number': 138,
            'name': '더미 문제10',
            'category': 'Dynamic Programming',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19032111
        },
        {
            'number': 141,
            'name': '더미 문제1',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19012118
        },
        {
            'number': 143,
            'name': '더미 문제2',
            'category': 'Greedy',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19122116
        },
        {
            'number': 148,
            'name': '더미 문제3',
            'category': 'BFS',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':19052130
        },
        {
            'number': 151,
            'name': '더미 문제4',
            'category': 'Simulation',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19092150
        },
        {
            'number': 158,
            'name': '더미 문제5',
            'category': 'Sorting',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19112121
        },
        {
            'number': 161,
            'name': '더미 문제6',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19042114
        },
        {
            'number': 163,
            'name': '더미 문제7',
            'category': 'Binary Search',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19032154
        },
        {
            'number': 168,
            'name': '더미 문제8',
            'category': 'Greedy',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':19032134
        },
        {
            'number': 171,
            'name': '더미 문제9',
            'category': 'Binary Search',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19032122
        },
        {
            'number': 178,
            'name': '더미 문제10',
            'category': 'Dynamic Programming',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':18012111
        },
        {
            'number': 301,
            'name': '더미 문제1',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':17032118
        },
        {
            'number': 303,
            'name': '더미 문제2',
            'category': 'Greedy',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19031216
        },
        {
            'number': 308,
            'name': '더미 문제3',
            'category': 'Data Structure',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':17082130
        },
        {
            'number': 311,
            'name': '더미 문제4',
            'category': 'Math',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19030050
        },
        {
            'number': 318,
            'name': '더미 문제5',
            'category': 'Brute Force',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19030021
        },
        {
            'number': 321,
            'name': '더미 문제6',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':18032114
        },
        {
            'number': 323,
            'name': '더미 문제7',
            'category': 'DFS',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':17032154
        },
        {
            'number': 328,
            'name': '더미 문제8',
            'category': 'Greedy',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':17082134
        },
        {
            'number': 331,
            'name': '더미 문제9',
            'category': 'Simulation',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19022122
        },
        {
            'number': 338,
            'name': '더미 문제10',
            'category': 'Tree',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':17032111
        },
        {
            'number': 341,
            'name': '더미 문제1',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19032118
        },
        {
            'number': 343,
            'name': '더미 문제2',
            'category': 'Greedy',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19052116
        },
        {
            'number': 348,
            'name': '더미 문제3',
            'category': 'BFS',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':19052130
        },
        {
            'number': 351,
            'name': '더미 문제4',
            'category': 'Simulation',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19042150
        },
        {
            'number': 358,
            'name': '더미 문제5',
            'category': 'Sorting',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19042121
        },
        {
            'number': 361,
            'name': '더미 문제6',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19122114
        },
        {
            'number': 363,
            'name': '더미 문제7',
            'category': 'Binary Search',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19032154
        },
        {
            'number': 368,
            'name': '더미 문제8',
            'category': 'Greedy',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':19032134
        },
        {
            'number': 371,
            'name': '더미 문제9',
            'category': 'Binary Search',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19032122
        },
        {
            'number': 378,
            'name': '더미 문제10',
            'category': 'Binary Search',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19032111
        },
        {
            'number': 401,
            'name': '더미 문제1',
            'category': 'Binary Search',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':18112118
        },
        {
            'number': 403,
            'name': '더미 문제2',
            'category': 'Greedy',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':18070116
        },
        {
            'number': 408,
            'name': '더미 문제3',
            'category': 'Math',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':18042130
        },
        {
            'number': 411,
            'name': '더미 문제4',
            'category': 'Simulation',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19102150
        },
        {
            'number': 418,
            'name': '더미 문제5',
            'category': 'Brute Force',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':18022121
        },
        {
            'number': 421,
            'name': '더미 문제6',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19082114
        },
        {
            'number': 423,
            'name': '더미 문제7',
            'category': 'DFS',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19032154
        },
        {
            'number': 428,
            'name': '더미 문제8',
            'category': 'Greedy',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':18112134
        },
        {
            'number': 431,
            'name': '더미 문제9',
            'category': 'Math',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':18052022
        },
        {
            'number': 438,
            'name': '더미 문제10',
            'category': 'Dynamic Programming',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19032111
        },
        {
            'number': 441,
            'name': '더미 문제1',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19012518
        },
        {
            'number': 443,
            'name': '더미 문제2',
            'category': 'Greedy',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19121116
        },
        {
            'number': 448,
            'name': '더미 문제3',
            'category': 'BFS',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':19052130
        },
        {
            'number': 451,
            'name': '더미 문제4',
            'category': 'Simulation',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19092150
        },
        {
            'number': 458,
            'name': '더미 문제5',
            'category': 'Sorting',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':19112121
        },
        {
            'number': 461,
            'name': '더미 문제6',
            'category': 'Dynamic Programming',
            'collectCount': 12000,
            'submitCount': 4900,
            'collectRate': 44.90,
            'time':19042114
        },
        {
            'number': 463,
            'name': '더미 문제7',
            'category': 'Binary Search',
            'collectCount': 8800,
            'submitCount': 2340,
            'collectRate': 25.69,
            'time':19032154
        },
        {
            'number': 468,
            'name': '더미 문제8',
            'category': 'Greedy',
            'collectCount': 4230,
            'submitCount': 1567,
            'collectRate': 34.32,
            'time':19030134
        },
        {
            'number': 471,
            'name': '더미 문제9',
            'category': 'Binary Search',
            'collectCount': 10540,
            'submitCount': 2109,
            'collectRate': 19.03,
            'time':19032122
        },
        {
            'number': 478,
            'name': '더미 문제10',
            'category': 'Dynamic Programming',
            'collectCount': 6800,
            'submitCount': 3799,
            'collectRate': 55.40,
            'time':18012111
        },
    ];

    const dummy3 = [
        {
            "number": 1080,
            "name": "행렬",
            "category": "그리디 알고리즘",
            "time": "1907291836",
            "collectCount": 1380,
            "submitCount": 3959,
            "collectRate": 42.698
        },
        {
            "number": 1120,
            "name": "문자열",
            "category": "그리디 알고리즘",
            "time": "1907290352",
            "collectCount": 2439,
            "submitCount": 5338,
            "collectRate": 53.195
        },
        {
            "number": 1120,
            "name": "문자열",
            "category": "브루트 포스",
            "time": "1907290352",
            "collectCount": 2439,
            "submitCount": 5338,
            "collectRate": 53.195
        },
        {
            "number": 1120,
            "name": "문자열",
            "category": "시뮬레이션",
            "time": "1907290352",
            "collectCount": 2439,
            "submitCount": 5338,
            "collectRate": 53.195
        },
        {
            "number": 1120,
            "name": "문자열",
            "category": "문자열 처리",
            "time": "1907290352",
            "collectCount": 2439,
            "submitCount": 5338,
            "collectRate": 53.195
        },
        {
            "number": 1138,
            "name": "한 줄로 서기",
            "category": "수학",
            "time": "1908041804",
            "collectCount": 1120,
            "submitCount": 2369,
            "collectRate": 57.613
        },
        {
            "number": 1138,
            "name": "한 줄로 서기",
            "category": "그리디 알고리즘",
            "time": "1908041804",
            "collectCount": 1120,
            "submitCount": 2369,
            "collectRate": 57.613
        },
        {
            "number": 1449,
            "name": "수리공 항승",
            "category": "그리디 알고리즘",
            "time": "1908091259",
            "collectCount": 914,
            "submitCount": 2706,
            "collectRate": 40.478
        },
        {
            "number": 1463,
            "name": "1로 만들기",
            "category": "다이나믹 프로그래밍",
            "time": "1907281404",
            "collectCount": 16972,
            "submitCount": 81374,
            "collectRate": 32.16
        },
        {
            "number": 1700,
            "name": "멀티탭 스케줄링",
            "category": "그리디 알고리즘",
            "time": "1908072055",
            "collectCount": 918,
            "submitCount": 4863,
            "collectRate": 25.984
        },
        {
            "number": 1783,
            "name": "병든 나이트",
            "category": "그리디 알고리즘",
            "time": "1908032338",
            "collectCount": 1138,
            "submitCount": 3090,
            "collectRate": 43.336
        },
        {
            "number": 1946,
            "name": "신입 사원",
            "category": "그리디 알고리즘",
            "time": "1907290330",
            "collectCount": 2279,
            "submitCount": 8578,
            "collectRate": 35.626
        },
        {
            "number": 2098,
            "name": "외판원 순회",
            "category": "다이나믹 프로그래밍",
            "time": "1907251733",
            "collectCount": 1705,
            "submitCount": 13161,
            "collectRate": 26.239
        },
        {
            "number": 2098,
            "name": "외판원 순회",
            "category": "비트마스크",
            "time": "1907251733",
            "collectCount": 1705,
            "submitCount": 13161,
            "collectRate": 26.239
        },
        {
            "number": 2294,
            "name": "동전 2",
            "category": "다이나믹 프로그래밍",
            "time": "1907251453",
            "collectCount": 5158,
            "submitCount": 26305,
            "collectRate": 27.388
        },
        {
            "number": 2294,
            "name": "동전 2",
            "category": "동전 교환",
            "time": "1907251453",
            "collectCount": 5158,
            "submitCount": 26305,
            "collectRate": 27.388
        },
        {
            "number": 2342,
            "name": "Dance Dance Revolution",
            "category": "다이나믹 프로그래밍",
            "time": "1907251638",
            "collectCount": 692,
            "submitCount": 2992,
            "collectRate": 33.365
        },
        {
            "number": 2437,
            "name": "저울",
            "category": "그리디 알고리즘",
            "time": "1908040003",
            "collectCount": 994,
            "submitCount": 3352,
            "collectRate": 36.952
        },
        {
            "number": 2449,
            "name": "전구",
            "category": "다이나믹 프로그래밍",
            "time": "1907251309",
            "collectCount": 560,
            "submitCount": 1846,
            "collectRate": 42.978
        },
        {
            "number": 2875,
            "name": "대회 or 인턴",
            "category": "그리디 알고리즘",
            "time": "1907290212",
            "collectCount": 2975,
            "submitCount": 8117,
            "collectRate": 44.133
        },
        {
            "number": 7579,
            "name": "앱",
            "category": "다이나믹 프로그래밍",
            "time": "1907251135",
            "collectCount": 1056,
            "submitCount": 3954,
            "collectRate": 37.394
        },
        {
            "number": 11062,
            "name": "카드 게임",
            "category": "None",
            "time": "1907251552",
            "collectCount": 1024,
            "submitCount": 3564,
            "collectRate": 43.892
        },
        {
            "number": 14003,
            "name": "가장 긴 증가하는 부분 수열 5",
            "category": "None",
            "time": "1907241507",
            "collectCount": 833,
            "submitCount": 3429,
            "collectRate": 38.211
        },
        {
            "number": 1010,
            "name": "다리 놓기",
            "category": "다이나믹 프로그래밍",
            "time": "1907221314",
            "collectCount": 7235,
            "submitCount": 19660,
            "collectRate": 47.759
        },
        {
            "number": 1256,
            "name": "사전",
            "category": "다이나믹 프로그래밍",
            "time": "1907221517",
            "collectCount": 1311,
            "submitCount": 6281,
            "collectRate": 29.049
        },
        {
            "number": 1256,
            "name": "사전",
            "category": "조합론",
            "time": "1907221517",
            "collectCount": 1311,
            "submitCount": 6281,
            "collectRate": 29.049
        },
        {
            "number": 1837,
            "name": "암호제작",
            "category": "수학",
            "time": "1907191518",
            "collectCount": 527,
            "submitCount": 3547,
            "collectRate": 23.782
        },
        {
            "number": 1837,
            "name": "암호제작",
            "category": "소수",
            "time": "1907191518",
            "collectCount": 527,
            "submitCount": 3547,
            "collectRate": 23.782
        },
        {
            "number": 1915,
            "name": "가장 큰 정사각형",
            "category": "다이나믹 프로그래밍",
            "time": "1907241335",
            "collectCount": 3122,
            "submitCount": 14660,
            "collectRate": 28.803
        },
        {
            "number": 1932,
            "name": "정수 삼각형",
            "category": "다이나믹 프로그래밍",
            "time": "1907240926",
            "collectCount": 10618,
            "submitCount": 24847,
            "collectRate": 58.2
        },
        {
            "number": 2162,
            "name": "선분 그룹",
            "category": "그래프 이론",
            "time": "1907231535",
            "collectCount": 770,
            "submitCount": 5188,
            "collectRate": 24.336
        },
        {
            "number": 2162,
            "name": "선분 그룹",
            "category": "기하 알고리즘",
            "time": "1907231535",
            "collectCount": 770,
            "submitCount": 5188,
            "collectRate": 24.336
        },
        {
            "number": 2166,
            "name": "다각형의 면적",
            "category": "CCW",
            "time": "1907231037",
            "collectCount": 1200,
            "submitCount": 8091,
            "collectRate": 21.119
        },
        {
            "number": 2579,
            "name": "계단 오르기",
            "category": "다이나믹 프로그래밍",
            "time": "1907240927",
            "collectCount": 12909,
            "submitCount": 44262,
            "collectRate": 39.197
        },
        {
            "number": 5557,
            "name": "1학년",
            "category": "다이나믹 프로그래밍",
            "time": "1907221620",
            "collectCount": 2128,
            "submitCount": 7676,
            "collectRate": 35.711
        },
        {
            "number": 5557,
            "name": "1학년",
            "category": "조합론",
            "time": "1907221620",
            "collectCount": 2128,
            "submitCount": 7676,
            "collectRate": 35.711
        },
        {
            "number": 5568,
            "name": "카드 놓기",
            "category": "조합론",
            "time": "1907221314",
            "collectCount": 481,
            "submitCount": 1179,
            "collectRate": 49.182
        },
        {
            "number": 10610,
            "name": "30",
            "category": "그리디 알고리즘",
            "time": "1907191723",
            "collectCount": 3245,
            "submitCount": 11663,
            "collectRate": 35.191
        },
        {
            "number": 10610,
            "name": "30",
            "category": "정수론",
            "time": "1907191723",
            "collectCount": 3245,
            "submitCount": 11663,
            "collectRate": 35.191
        },
        {
            "number": 11049,
            "name": "행렬 곱셈 순서",
            "category": "다이나믹 프로그래밍",
            "time": "1907241157",
            "collectCount": 1922,
            "submitCount": 5907,
            "collectRate": 44.032
        },
        {
            "number": 11050,
            "name": "이항 계수 1",
            "category": "None",
            "time": "1907220917",
            "collectCount": 5848,
            "submitCount": 10786,
            "collectRate": 64.583
        },
        {
            "number": 11051,
            "name": "이항 계수 2",
            "category": "다이나믹 프로그래밍",
            "time": "1907220925",
            "collectCount": 4911,
            "submitCount": 16469,
            "collectRate": 38.697
        },
        {
            "number": 11659,
            "name": "구간 합 구하기 4",
            "category": "None",
            "time": "1907240907",
            "collectCount": 3209,
            "submitCount": 7824,
            "collectRate": 53.483
        },
        {
            "number": 11660,
            "name": "구간 합 구하기 5",
            "category": "None",
            "time": "1907240925",
            "collectCount": 1799,
            "submitCount": 3930,
            "collectRate": 58.772
        },
        {
            "number": 11758,
            "name": "CCW",
            "category": "CCW",
            "time": "1907230947",
            "collectCount": 2360,
            "submitCount": 4051,
            "collectRate": 74.237
        },
        {
            "number": 1516,
            "name": "게임 개발",
            "category": "위상 정렬",
            "time": "1907171741",
            "collectCount": 1644,
            "submitCount": 4673,
            "collectRate": 46.038
        },
        {
            "number": 1644,
            "name": "소수의 연속합",
            "category": "정수론",
            "time": "1907191337",
            "collectCount": 2228,
            "submitCount": 7431,
            "collectRate": 42.422
        },
        {
            "number": 1644,
            "name": "소수의 연속합",
            "category": "에라토스테네스의 체",
            "time": "1907191337",
            "collectCount": 2228,
            "submitCount": 7431,
            "collectRate": 42.422
        },
        {
            "number": 1644,
            "name": "소수의 연속합",
            "category": "투 포인터",
            "time": "1907191337",
            "collectCount": 2228,
            "submitCount": 7431,
            "collectRate": 42.422
        },
        {
            "number": 1717,
            "name": "집합의 표현",
            "category": "Disjoint-set",
            "time": "1907171105",
            "collectCount": 4034,
            "submitCount": 19816,
            "collectRate": 29.736
        },
        {
            "number": 1735,
            "name": "분수 합",
            "category": "유클리드 호제법",
            "time": "1907191033",
            "collectCount": 3508,
            "submitCount": 9484,
            "collectRate": 45.265
        },
        {
            "number": 1753,
            "name": "최단경로",
            "category": "다익스트라 알고리즘",
            "time": "1907181308",
            "collectCount": 4703,
            "submitCount": 40758,
            "collectRate": 23.35
        },
        {
            "number": 1837,
            "name": "암호제작",
            "category": "수학",
            "time": "1907191458",
            "collectCount": 527,
            "submitCount": 3547,
            "collectRate": 23.782
        },
        {
            "number": 1837,
            "name": "암호제작",
            "category": "소수",
            "time": "1907191458",
            "collectCount": 527,
            "submitCount": 3547,
            "collectRate": 23.782
        },
        {
            "number": 1922,
            "name": "네트워크 연결",
            "category": "최소 스패닝 트리",
            "time": "1907171432",
            "collectCount": 3797,
            "submitCount": 11865,
            "collectRate": 53.585
        },
        {
            "number": 1991,
            "name": "트리 순회",
            "category": "트리",
            "time": "1907161457",
            "collectCount": 5796,
            "submitCount": 12494,
            "collectRate": 62.209
        },
        {
            "number": 2042,
            "name": "구간 합 구하기",
            "category": "세그먼트 트리",
            "time": "1907161624",
            "collectCount": 4458,
            "submitCount": 27564,
            "collectRate": 29.071
        },
        {
            "number": 2042,
            "name": "구간 합 구하기",
            "category": "인덱스 트리",
            "time": "1907161624",
            "collectCount": 4458,
            "submitCount": 27564,
            "collectRate": 29.071
        },
        {
            "number": 2252,
            "name": "줄 세우기",
            "category": "위상 정렬",
            "time": "1907171136",
            "collectCount": 3627,
            "submitCount": 10619,
            "collectRate": 51.171
        },
        {
            "number": 2252,
            "name": "줄 세우기",
            "category": "우선 순위 큐",
            "time": "1907171136",
            "collectCount": 3627,
            "submitCount": 10619,
            "collectRate": 51.171
        },
        {
            "number": 2458,
            "name": "키 순서",
            "category": "플로이드 와샬 알고리즘",
            "time": "1907171504",
            "collectCount": 1355,
            "submitCount": 3495,
            "collectRate": 51.619
        },
        {
            "number": 2504,
            "name": "괄호의 값",
            "category": "스택",
            "time": "1907161146",
            "collectCount": 3290,
            "submitCount": 17847,
            "collectRate": 28.257
        },
        {
            "number": 2960,
            "name": "에라토스테네스의 체",
            "category": "구현",
            "time": "1907191120",
            "collectCount": 3751,
            "submitCount": 8595,
            "collectRate": 52.141
        },
        {
            "number": 2960,
            "name": "에라토스테네스의 체",
            "category": "에라토스테네스의 체",
            "time": "1907191120",
            "collectCount": 3751,
            "submitCount": 8595,
            "collectRate": 52.141
        },
        {
            "number": 6588,
            "name": "골드바흐의 추측",
            "category": "정수론",
            "time": "1907191336",
            "collectCount": 3437,
            "submitCount": 18271,
            "collectRate": 26.766
        },
        {
            "number": 6588,
            "name": "골드바흐의 추측",
            "category": "에라토스테네스의 체",
            "time": "1907191336",
            "collectCount": 3437,
            "submitCount": 18271,
            "collectRate": 26.766
        },
        {
            "number": 7453,
            "name": "합이 0인 네 정수",
            "category": "브루트 포스",
            "time": "1907161323",
            "collectCount": 1205,
            "submitCount": 9140,
            "collectRate": 20.729
        },
        {
            "number": 7453,
            "name": "합이 0인 네 정수",
            "category": "이분 탐색",
            "time": "1907161323",
            "collectCount": 1205,
            "submitCount": 9140,
            "collectRate": 20.729
        },
        {
            "number": 7453,
            "name": "합이 0인 네 정수",
            "category": "자료구조",
            "time": "1907161323",
            "collectCount": 1205,
            "submitCount": 9140,
            "collectRate": 20.729
        },
        {
            "number": 11266,
            "name": "단절점",
            "category": "단절점",
            "time": "1907181747",
            "collectCount": 944,
            "submitCount": 5069,
            "collectRate": 30.432
        },
        {
            "number": 11404,
            "name": "플로이드",
            "category": "그래프 이론",
            "time": "1907181437",
            "collectCount": 3114,
            "submitCount": 10316,
            "collectRate": 45.99
        },
        {
            "number": 11404,
            "name": "플로이드",
            "category": "플로이드 와샬 알고리즘",
            "time": "1907181437",
            "collectCount": 3114,
            "submitCount": 10316,
            "collectRate": 45.99
        },
        {
            "number": 11653,
            "name": "소인수분해",
            "category": "소인수분해",
            "time": "1907191401",
            "collectCount": 4252,
            "submitCount": 9995,
            "collectRate": 54.049
        },
        {
            "number": 11657,
            "name": "타임머신",
            "category": "벨만-포드 알고리즘",
            "time": "1907181409",
            "collectCount": 2049,
            "submitCount": 12298,
            "collectRate": 30.747
        },
        {
            "number": 1024,
            "name": "수열의 합",
            "category": "수학",
            "time": "1907061439",
            "collectCount": 1617,
            "submitCount": 8684,
            "collectRate": 25.716
        },
        {
            "number": 1024,
            "name": "수열의 합",
            "category": "탐색",
            "time": "1907061439",
            "collectCount": 1617,
            "submitCount": 8684,
            "collectRate": 25.716
        },
        {
            "number": 1049,
            "name": "기타줄",
            "category": "그리디 알고리즘",
            "time": "1907160033",
            "collectCount": 2171,
            "submitCount": 8678,
            "collectRate": 29.667
        },
        {
            "number": 1072,
            "name": "게임",
            "category": "수학",
            "time": "1907151424",
            "collectCount": 1213,
            "submitCount": 9054,
            "collectRate": 19.924
        },
        {
            "number": 1072,
            "name": "게임",
            "category": "브루트 포스",
            "time": "1907151424",
            "collectCount": 1213,
            "submitCount": 9054,
            "collectRate": 19.924
        },
        {
            "number": 1072,
            "name": "게임",
            "category": "이분 탐색",
            "time": "1907151424",
            "collectCount": 1213,
            "submitCount": 9054,
            "collectRate": 19.924
        },
        {
            "number": 1072,
            "name": "게임",
            "category": "탐색",
            "time": "1907151424",
            "collectCount": 1213,
            "submitCount": 9054,
            "collectRate": 19.924
        },
        {
            "number": 1373,
            "name": "2진수 8진수",
            "category": "None",
            "time": "1907061549",
            "collectCount": 2893,
            "submitCount": 10499,
            "collectRate": 37.802
        },
        {
            "number": 1520,
            "name": "내리막 길",
            "category": "다이나믹 프로그래밍",
            "time": "1907062000",
            "collectCount": 4076,
            "submitCount": 23611,
            "collectRate": 26.954
        },
        {
            "number": 1541,
            "name": "잃어버린 괄호",
            "category": "그리디 알고리즘",
            "time": "1907131557",
            "collectCount": 2165,
            "submitCount": 5363,
            "collectRate": 50.549
        },
        {
            "number": 1806,
            "name": "부분합",
            "category": "투 포인터",
            "time": "1907151246",
            "collectCount": 1984,
            "submitCount": 11230,
            "collectRate": 24.943
        },
        {
            "number": 2003,
            "name": "수들의 합 2",
            "category": "투 포인터",
            "time": "1907151019",
            "collectCount": 3716,
            "submitCount": 11048,
            "collectRate": 50.786
        },
        {
            "number": 2096,
            "name": "내려가기",
            "category": "다이나믹 프로그래밍",
            "time": "1907151400",
            "collectCount": 2789,
            "submitCount": 10312,
            "collectRate": 35.821
        },
        {
            "number": 2096,
            "name": "내려가기",
            "category": "슬라이딩 윈도우",
            "time": "1907151400",
            "collectCount": 2789,
            "submitCount": 10312,
            "collectRate": 35.821
        },
        {
            "number": 2143,
            "name": "두 배열의 합",
            "category": "투 포인터",
            "time": "1907152321",
            "collectCount": 700,
            "submitCount": 4066,
            "collectRate": 26.687
        },
        {
            "number": 2293,
            "name": "동전 1",
            "category": "다이나믹 프로그래밍",
            "time": "1907061925",
            "collectCount": 6819,
            "submitCount": 22342,
            "collectRate": 41.883
        },
        {
            "number": 2293,
            "name": "동전 1",
            "category": "동전 교환",
            "time": "1907061925",
            "collectCount": 6819,
            "submitCount": 22342,
            "collectRate": 41.883
        },
        {
            "number": 2517,
            "name": "달리기",
            "category": "None",
            "time": "1907151720",
            "collectCount": 670,
            "submitCount": 2695,
            "collectRate": 45.985
        },
        {
            "number": 2748,
            "name": "피보나치 수 2",
            "category": "None",
            "time": "1907151111",
            "collectCount": 8671,
            "submitCount": 25321,
            "collectRate": 41.034
        },
        {
            "number": 2805,
            "name": "나무 자르기",
            "category": "이분 탐색",
            "time": "1907151108",
            "collectCount": 5236,
            "submitCount": 30782,
            "collectRate": 25.432
        },
        {
            "number": 10828,
            "name": "스택",
            "category": "스택",
            "time": "1907161026",
            "collectCount": 14320,
            "submitCount": 50782,
            "collectRate": 40.693
        },
        {
            "number": 10845,
            "name": "큐",
            "category": "큐",
            "time": "1907161026",
            "collectCount": 10518,
            "submitCount": 28821,
            "collectRate": 49.981
        },
        {
            "number": 11003,
            "name": "최솟값 찾기",
            "category": "슬라이딩 윈도우",
            "time": "1907161025",
            "collectCount": 964,
            "submitCount": 6912,
            "collectRate": 27.048
        },
        {
            "number": 11066,
            "name": "파일 합치기",
            "category": "다이나믹 프로그래밍",
            "time": "1907062238",
            "collectCount": 2879,
            "submitCount": 8564,
            "collectRate": 51.567
        },
        {
            "number": 1003,
            "name": "피보나치 함수",
            "category": "다이나믹 프로그래밍",
            "time": "1905252028",
            "collectCount": 12737,
            "submitCount": 71168,
            "collectRate": 29.191
        },
        {
            "number": 1010,
            "name": "다리 놓기",
            "category": "다이나믹 프로그래밍",
            "time": "1906021745",
            "collectCount": 7235,
            "submitCount": 19660,
            "collectRate": 47.759
        },
        {
            "number": 1149,
            "name": "RGB거리",
            "category": "다이나믹 프로그래밍",
            "time": "1905252054",
            "collectCount": 11798,
            "submitCount": 34500,
            "collectRate": 46.732
        },
        {
            "number": 1912,
            "name": "연속합",
            "category": "다이나믹 프로그래밍",
            "time": "1905291136",
            "collectCount": 9780,
            "submitCount": 51250,
            "collectRate": 27.109
        },
        {
            "number": 1912,
            "name": "연속합",
            "category": "수학",
            "time": "1905291136",
            "collectCount": 9780,
            "submitCount": 51250,
            "collectRate": 27.109
        },
        {
            "number": 1931,
            "name": "회의실배정",
            "category": "그리디 알고리즘",
            "time": "1906051806",
            "collectCount": 6034,
            "submitCount": 29183,
            "collectRate": 28.736
        },
        {
            "number": 1932,
            "name": "정수 삼각형",
            "category": "다이나믹 프로그래밍",
            "time": "1905252218",
            "collectCount": 10618,
            "submitCount": 24847,
            "collectRate": 58.2
        },
        {
            "number": 2163,
            "name": "초콜릿 자르기",
            "category": "다이나믹 프로그래밍",
            "time": "1906021800",
            "collectCount": 7128,
            "submitCount": 11710,
            "collectRate": 72.058
        },
        {
            "number": 2163,
            "name": "초콜릿 자르기",
            "category": "수학",
            "time": "1906021800",
            "collectCount": 7128,
            "submitCount": 11710,
            "collectRate": 72.058
        },
        {
            "number": 2217,
            "name": "로프",
            "category": "그리디 알고리즘",
            "time": "1906112305",
            "collectCount": 4037,
            "submitCount": 10687,
            "collectRate": 45.88
        },
        {
            "number": 5585,
            "name": "거스름돈",
            "category": "구현",
            "time": "1906112238",
            "collectCount": 4220,
            "submitCount": 7536,
            "collectRate": 63.717
        },
        {
            "number": 5585,
            "name": "거스름돈",
            "category": "그리디 알고리즘",
            "time": "1906112238",
            "collectCount": 4220,
            "submitCount": 7536,
            "collectRate": 63.717
        },
        {
            "number": 9465,
            "name": "스티커",
            "category": "다이나믹 프로그래밍",
            "time": "1906021850",
            "collectCount": 7024,
            "submitCount": 22208,
            "collectRate": 47.877
        },
        {
            "number": 10844,
            "name": "쉬운 계단 수",
            "category": "다이나믹 프로그래밍",
            "time": "1905291147",
            "collectCount": 9196,
            "submitCount": 42429,
            "collectRate": 28.261
        },
        {
            "number": 10845,
            "name": "큐",
            "category": "큐",
            "time": "1905271315",
            "collectCount": 10518,
            "submitCount": 28821,
            "collectRate": 49.981
        },
        {
            "number": 11047,
            "name": "동전 0",
            "category": "그리디 알고리즘",
            "time": "1906112231",
            "collectCount": 7996,
            "submitCount": 17686,
            "collectRate": 55.932
        },
        {
            "number": 11047,
            "name": "동전 0",
            "category": "동전 교환",
            "time": "1906112231",
            "collectCount": 7996,
            "submitCount": 17686,
            "collectRate": 55.932
        },
        {
            "number": 11052,
            "name": "카드 구매하기",
            "category": "다이나믹 프로그래밍",
            "time": "1906021709",
            "collectCount": 7927,
            "submitCount": 18117,
            "collectRate": 59.414
        },
        {
            "number": 11053,
            "name": "가장 긴 증가하는 부분 수열",
            "category": "다이나믹 프로그래밍",
            "time": "1905291322",
            "collectCount": 8464,
            "submitCount": 33326,
            "collectRate": 37.006
        },
        {
            "number": 11399,
            "name": "ATM",
            "category": "그리디 알고리즘",
            "time": "1906112222",
            "collectCount": 9205,
            "submitCount": 16086,
            "collectRate": 68.296
        },
        {
            "number": 11726,
            "name": "2×n 타일링",
            "category": "다이나믹 프로그래밍",
            "time": "1905252148",
            "collectCount": 11855,
            "submitCount": 43148,
            "collectRate": 34.765
        },
        {
            "number": 1011,
            "name": "Fly me to the Alpha Centauri",
            "category": "None",
            "time": "1905142231",
            "collectCount": 5185,
            "submitCount": 25779,
            "collectRate": 27.558
        },
        {
            "number": 1157,
            "name": "단어 공부",
            "category": "문자열 처리",
            "time": "1904292118",
            "collectCount": 11894,
            "submitCount": 39772,
            "collectRate": 37.874
        },
        {
            "number": 1181,
            "name": "단어 정렬",
            "category": "정렬",
            "time": "1905132032",
            "collectCount": 6321,
            "submitCount": 23555,
            "collectRate": 37.556
        },
        {
            "number": 1316,
            "name": "그룹 단어 체커",
            "category": "탐색",
            "time": "1904292147",
            "collectCount": 8937,
            "submitCount": 20170,
            "collectRate": 51.929
        },
        {
            "number": 1316,
            "name": "그룹 단어 체커",
            "category": "문자열 처리",
            "time": "1904292147",
            "collectCount": 8937,
            "submitCount": 20170,
            "collectRate": 51.929
        },
        {
            "number": 1427,
            "name": "소트인사이드",
            "category": "정렬",
            "time": "1905132022",
            "collectCount": 8189,
            "submitCount": 15891,
            "collectRate": 60.165
        },
        {
            "number": 1695,
            "name": "팰린드롬 만들기",
            "category": "다이나믹 프로그래밍",
            "time": "1905011720",
            "collectCount": 665,
            "submitCount": 2469,
            "collectRate": 39.94
        },
        {
            "number": 1937,
            "name": "욕심쟁이 판다",
            "category": "다이나믹 프로그래밍",
            "time": "1905011305",
            "collectCount": 3154,
            "submitCount": 16057,
            "collectRate": 29.299
        },
        {
            "number": 1937,
            "name": "욕심쟁이 판다",
            "category": "정렬",
            "time": "1905011305",
            "collectCount": 3154,
            "submitCount": 16057,
            "collectRate": 29.299
        },
        {
            "number": 1937,
            "name": "욕심쟁이 판다",
            "category": "LIS",
            "time": "1905011305",
            "collectCount": 3154,
            "submitCount": 16057,
            "collectRate": 29.299
        },
        {
            "number": 2108,
            "name": "통계학",
            "category": "None",
            "time": "1905132018",
            "collectCount": 3229,
            "submitCount": 15915,
            "collectRate": 27.726
        },
        {
            "number": 2352,
            "name": "반도체 설계",
            "category": "다이나믹 프로그래밍",
            "time": "1905081426",
            "collectCount": 1284,
            "submitCount": 4503,
            "collectRate": 43.585
        },
        {
            "number": 2352,
            "name": "반도체 설계",
            "category": "그리디 알고리즘",
            "time": "1905081426",
            "collectCount": 1284,
            "submitCount": 4503,
            "collectRate": 43.585
        },
        {
            "number": 2352,
            "name": "반도체 설계",
            "category": "LIS",
            "time": "1905081426",
            "collectCount": 1284,
            "submitCount": 4503,
            "collectRate": 43.585
        },
        {
            "number": 2579,
            "name": "계단 오르기",
            "category": "다이나믹 프로그래밍",
            "time": "1905252004",
            "collectCount": 12909,
            "submitCount": 44262,
            "collectRate": 39.197
        },
        {
            "number": 2666,
            "name": "벽장문의 이동",
            "category": "다이나믹 프로그래밍",
            "time": "1904292029",
            "collectCount": 855,
            "submitCount": 2488,
            "collectRate": 48.635
        },
        {
            "number": 2675,
            "name": "문자열 반복",
            "category": "None",
            "time": "1904292124",
            "collectCount": 12510,
            "submitCount": 26558,
            "collectRate": 55.134
        },
        {
            "number": 2908,
            "name": "상수",
            "category": "문자열 처리",
            "time": "1904292153",
            "collectCount": 11714,
            "submitCount": 19012,
            "collectRate": 69.726
        },
        {
            "number": 10809,
            "name": "알파벳 찾기",
            "category": "문자열 처리",
            "time": "1904292106",
            "collectCount": 15140,
            "submitCount": 32106,
            "collectRate": 56.677
        },
        {
            "number": 10989,
            "name": "수 정렬하기 3",
            "category": "정렬",
            "time": "1905132156",
            "collectCount": 6932,
            "submitCount": 44301,
            "collectRate": 23.07
        },
        {
            "number": 10996,
            "name": "별 찍기 - 21",
            "category": "None",
            "time": "1904290025",
            "collectCount": 1376,
            "submitCount": 1834,
            "collectRate": 82.002
        },
        {
            "number": 11654,
            "name": "아스키 코드",
            "category": "문자열 처리",
            "time": "1904292059",
            "collectCount": 17229,
            "submitCount": 23302,
            "collectRate": 82.911
        },
        {
            "number": 13015,
            "name": "별 찍기 - 23",
            "category": "None",
            "time": "1904290043",
            "collectCount": 366,
            "submitCount": 665,
            "collectRate": 66.184
        },
        {
            "number": 2439,
            "name": "별 찍기 - 2",
            "category": "출력",
            "time": "1904281855",
            "collectCount": 31194,
            "submitCount": 60065,
            "collectRate": 59.404
        },
        {
            "number": 2440,
            "name": "별 찍기 - 3",
            "category": "출력",
            "time": "1904281901",
            "collectCount": 27766,
            "submitCount": 46063,
            "collectRate": 66.76
        },
        {
            "number": 2441,
            "name": "별 찍기 - 4",
            "category": "None",
            "time": "1904281903",
            "collectCount": 26573,
            "submitCount": 40291,
            "collectRate": 73.374
        },
        {
            "number": 2442,
            "name": "별 찍기 - 5",
            "category": "None",
            "time": "1904281905",
            "collectCount": 9410,
            "submitCount": 18134,
            "collectRate": 58.306
        },
        {
            "number": 2443,
            "name": "별 찍기 - 6",
            "category": "None",
            "time": "1904281908",
            "collectCount": 7043,
            "submitCount": 10335,
            "collectRate": 74.91
        },
        {
            "number": 2444,
            "name": "별 찍기 - 7",
            "category": "None",
            "time": "1904281913",
            "collectCount": 7531,
            "submitCount": 11564,
            "collectRate": 73.495
        },
        {
            "number": 2445,
            "name": "별 찍기 - 8",
            "category": "None",
            "time": "1904281947",
            "collectCount": 6943,
            "submitCount": 10264,
            "collectRate": 74.035
        },
        {
            "number": 2446,
            "name": "별 찍기 - 9",
            "category": "None",
            "time": "1904281952",
            "collectCount": 6001,
            "submitCount": 9688,
            "collectRate": 67.095
        },
        {
            "number": 2447,
            "name": "별 찍기 - 10",
            "category": "None",
            "time": "1904282047",
            "collectCount": 2967,
            "submitCount": 8346,
            "collectRate": 52.588
        },
        {
            "number": 2522,
            "name": "별 찍기 - 12",
            "category": "None",
            "time": "1904282050",
            "collectCount": 5103,
            "submitCount": 6345,
            "collectRate": 86.025
        },
        {
            "number": 2523,
            "name": "별 찍기 - 13",
            "category": "None",
            "time": "1904282052",
            "collectCount": 3384,
            "submitCount": 4783,
            "collectRate": 76.251
        },
        {
            "number": 2556,
            "name": "별 찍기 - 14",
            "category": "None",
            "time": "1904282056",
            "collectCount": 2325,
            "submitCount": 5403,
            "collectRate": 52.365
        },
        {
            "number": 10990,
            "name": "별 찍기 - 15",
            "category": "None",
            "time": "1904282101",
            "collectCount": 2306,
            "submitCount": 3371,
            "collectRate": 73.721
        },
        {
            "number": 10991,
            "name": "별 찍기 - 16",
            "category": "None",
            "time": "1904282300",
            "collectCount": 3850,
            "submitCount": 5203,
            "collectRate": 80.275
        },
        {
            "number": 10992,
            "name": "별 찍기 - 17",
            "category": "None",
            "time": "1904282311",
            "collectCount": 3513,
            "submitCount": 5538,
            "collectRate": 70.232
        },
        {
            "number": 10993,
            "name": "별 찍기 - 18",
            "category": "None",
            "time": "1904290007",
            "collectCount": 301,
            "submitCount": 787,
            "collectRate": 47.551
        },
        {
            "number": 10994,
            "name": "별 찍기 - 19",
            "category": "None",
            "time": "1904290012",
            "collectCount": 617,
            "submitCount": 958,
            "collectRate": 75.152
        },
        {
            "number": 10995,
            "name": "별 찍기 - 20",
            "category": "None",
            "time": "1904290017",
            "collectCount": 2076,
            "submitCount": 2669,
            "collectRate": 85.644
        },
        {
            "number": 11727,
            "name": "2×n 타일링 2",
            "category": "다이나믹 프로그래밍",
            "time": "1904281554",
            "collectCount": 8886,
            "submitCount": 18447,
            "collectRate": 59.968
        },
        {
            "number": 14468,
            "name": "소가 길을 건너간 이유 2",
            "category": "None",
            "time": "1904241738",
            "collectCount": 234,
            "submitCount": 481,
            "collectRate": 62.903
        },
        {
            "number": 1072,
            "name": "게임",
            "category": "수학",
            "time": "1904101443",
            "collectCount": 1213,
            "submitCount": 9054,
            "collectRate": 19.924
        },
        {
            "number": 1072,
            "name": "게임",
            "category": "브루트 포스",
            "time": "1904101443",
            "collectCount": 1213,
            "submitCount": 9054,
            "collectRate": 19.924
        },
        {
            "number": 1072,
            "name": "게임",
            "category": "이분 탐색",
            "time": "1904101443",
            "collectCount": 1213,
            "submitCount": 9054,
            "collectRate": 19.924
        },
        {
            "number": 1072,
            "name": "게임",
            "category": "탐색",
            "time": "1904101443",
            "collectCount": 1213,
            "submitCount": 9054,
            "collectRate": 19.924
        },
        {
            "number": 1074,
            "name": "Z",
            "category": "수학",
            "time": "1904211714",
            "collectCount": 3538,
            "submitCount": 11935,
            "collectRate": 42.755
        },
        {
            "number": 1074,
            "name": "Z",
            "category": "재귀 호출",
            "time": "1904211714",
            "collectCount": 3538,
            "submitCount": 11935,
            "collectRate": 42.755
        },
        {
            "number": 1074,
            "name": "Z",
            "category": "분할 정복",
            "time": "1904211714",
            "collectCount": 3538,
            "submitCount": 11935,
            "collectRate": 42.755
        },
        {
            "number": 1107,
            "name": "리모컨",
            "category": "수학",
            "time": "1903311757",
            "collectCount": 3410,
            "submitCount": 22746,
            "collectRate": 21.724
        },
        {
            "number": 1107,
            "name": "리모컨",
            "category": "브루트 포스",
            "time": "1903311757",
            "collectCount": 3410,
            "submitCount": 22746,
            "collectRate": 21.724
        },
        {
            "number": 1654,
            "name": "랜선 자르기",
            "category": "이분 탐색",
            "time": "1904031746",
            "collectCount": 3725,
            "submitCount": 30867,
            "collectRate": 18.736
        },
        {
            "number": 1748,
            "name": "수 이어 쓰기 1",
            "category": "구현",
            "time": "1903311815",
            "collectCount": 2163,
            "submitCount": 4587,
            "collectRate": 57.619
        },
        {
            "number": 1748,
            "name": "수 이어 쓰기 1",
            "category": "브루트 포스",
            "time": "1903311815",
            "collectCount": 2163,
            "submitCount": 4587,
            "collectRate": 57.619
        },
        {
            "number": 1780,
            "name": "종이의 개수",
            "category": "분할 정복",
            "time": "1904191510",
            "collectCount": 3279,
            "submitCount": 7618,
            "collectRate": 58.242
        },
        {
            "number": 1966,
            "name": "프린터 큐",
            "category": "브루트 포스",
            "time": "1903271540",
            "collectCount": 5161,
            "submitCount": 12747,
            "collectRate": 52.977
        },
        {
            "number": 1966,
            "name": "프린터 큐",
            "category": "시뮬레이션",
            "time": "1903271540",
            "collectCount": 5161,
            "submitCount": 12747,
            "collectRate": 52.977
        },
        {
            "number": 1966,
            "name": "프린터 큐",
            "category": "큐",
            "time": "1903271540",
            "collectCount": 5161,
            "submitCount": 12747,
            "collectRate": 52.977
        },
        {
            "number": 1992,
            "name": "쿼드트리",
            "category": "분할 정복",
            "time": "1904191559",
            "collectCount": 3808,
            "submitCount": 8669,
            "collectRate": 56.895
        },
        {
            "number": 2022,
            "name": "사다리",
            "category": "이분 탐색",
            "time": "1904101652",
            "collectCount": 433,
            "submitCount": 1611,
            "collectRate": 49.261
        },
        {
            "number": 2104,
            "name": "부분배열 고르기",
            "category": "None",
            "time": "1904212004",
            "collectCount": 365,
            "submitCount": 1934,
            "collectRate": 27.423
        },
        {
            "number": 2110,
            "name": "공유기 설치",
            "category": "이분 탐색",
            "time": "1904051701",
            "collectCount": 1995,
            "submitCount": 5740,
            "collectRate": 50.57
        },
        {
            "number": 2448,
            "name": "별 찍기 - 11",
            "category": "None",
            "time": "1904021330",
            "collectCount": 4859,
            "submitCount": 18354,
            "collectRate": 36.526
        },
        {
            "number": 2512,
            "name": "예산",
            "category": "이분 탐색",
            "time": "1904061810",
            "collectCount": 2962,
            "submitCount": 12781,
            "collectRate": 31.544
        },
        {
            "number": 2805,
            "name": "나무 자르기",
            "category": "이분 탐색",
            "time": "1904061729",
            "collectCount": 5236,
            "submitCount": 30782,
            "collectRate": 25.432
        },
        {
            "number": 3085,
            "name": "사탕 게임",
            "category": "브루트 포스",
            "time": "1903311405",
            "collectCount": 1374,
            "submitCount": 5706,
            "collectRate": 32.201
        },
        {
            "number": 6064,
            "name": "카잉 달력",
            "category": "None",
            "time": "1904021804",
            "collectCount": 4231,
            "submitCount": 26376,
            "collectRate": 22.886
        },
        {
            "number": 6549,
            "name": "히스토그램에서 가장 큰 직사각형",
            "category": "세그먼트 트리",
            "time": "1904212032",
            "collectCount": 2036,
            "submitCount": 13004,
            "collectRate": 25.17
        },
        {
            "number": 6549,
            "name": "히스토그램에서 가장 큰 직사각형",
            "category": "스택",
            "time": "1904212032",
            "collectCount": 2036,
            "submitCount": 13004,
            "collectRate": 25.17
        },
        {
            "number": 6549,
            "name": "히스토그램에서 가장 큰 직사각형",
            "category": "분할 정복",
            "time": "1904212032",
            "collectCount": 2036,
            "submitCount": 13004,
            "collectRate": 25.17
        },
        {
            "number": 10997,
            "name": "별 찍기 - 22",
            "category": "None",
            "time": "1904021425",
            "collectCount": 366,
            "submitCount": 1184,
            "collectRate": 35.057
        },
        {
            "number": 11729,
            "name": "하노이 탑 이동 순서",
            "category": "분할 정복",
            "time": "1904211631",
            "collectCount": 3834,
            "submitCount": 9902,
            "collectRate": 51.284
        },
        {
            "number": 14467,
            "name": "소가 길을 건너간 이유 1",
            "category": "None",
            "time": "1904241708",
            "collectCount": 520,
            "submitCount": 916,
            "collectRate": 63.26
        },
        {
            "number": 1193,
            "name": "분수찾기",
            "category": "None",
            "time": "1903061505",
            "collectCount": 8972,
            "submitCount": 19653,
            "collectRate": 54.333
        },
        {
            "number": 1325,
            "name": "효율적인 해킹",
            "category": "BFS",
            "time": "1903081124",
            "collectCount": 1789,
            "submitCount": 15403,
            "collectRate": 21.743
        },
        {
            "number": 1325,
            "name": "효율적인 해킹",
            "category": "DFS",
            "time": "1903081124",
            "collectCount": 1789,
            "submitCount": 15403,
            "collectRate": 21.743
        },
        {
            "number": 1890,
            "name": "점프",
            "category": "다이나믹 프로그래밍",
            "time": "1903082246",
            "collectCount": 4068,
            "submitCount": 19595,
            "collectRate": 27.06
        },
        {
            "number": 2146,
            "name": "다리 만들기",
            "category": "BFS",
            "time": "1902262247",
            "collectCount": 2557,
            "submitCount": 11886,
            "collectRate": 32.363
        },
        {
            "number": 2146,
            "name": "다리 만들기",
            "category": "DFS",
            "time": "1902262247",
            "collectCount": 2557,
            "submitCount": 11886,
            "collectRate": 32.363
        },
        {
            "number": 2156,
            "name": "포도주 시식",
            "category": "다이나믹 프로그래밍",
            "time": "1903192119",
            "collectCount": 10011,
            "submitCount": 38803,
            "collectRate": 34.521
        },
        {
            "number": 2178,
            "name": "미로 탐색",
            "category": "BFS",
            "time": "1903051405",
            "collectCount": 11884,
            "submitCount": 53826,
            "collectRate": 34.017
        },
        {
            "number": 2234,
            "name": "성곽",
            "category": "BFS",
            "time": "1903081707",
            "collectCount": 796,
            "submitCount": 2890,
            "collectRate": 38.491
        },
        {
            "number": 2606,
            "name": "바이러스",
            "category": "플로이드 와샬 알고리즘",
            "time": "1903051104",
            "collectCount": 8778,
            "submitCount": 29891,
            "collectRate": 41.047
        },
        {
            "number": 2775,
            "name": "부녀회장이 될테야",
            "category": "None",
            "time": "1903070029",
            "collectCount": 6742,
            "submitCount": 13423,
            "collectRate": 58.585
        },
        {
            "number": 7569,
            "name": "토마토",
            "category": "BFS",
            "time": "1903061620",
            "collectCount": 4315,
            "submitCount": 16866,
            "collectRate": 36.469
        },
        {
            "number": 7576,
            "name": "토마토",
            "category": "BFS",
            "time": "1903070157",
            "collectCount": 9752,
            "submitCount": 49813,
            "collectRate": 30.095
        },
        {
            "number": 10451,
            "name": "순열 사이클",
            "category": "None",
            "time": "1903050005",
            "collectCount": 3931,
            "submitCount": 8580,
            "collectRate": 63.118
        },
        {
            "number": 15683,
            "name": "감시",
            "category": "브루트 포스",
            "time": "1902281349",
            "collectCount": 2647,
            "submitCount": 10803,
            "collectRate": 38.169
        },
        {
            "number": 16986,
            "name": "인싸들의 가위바위보",
            "category": "None",
            "time": "1903012358",
            "collectCount": 207,
            "submitCount": 779,
            "collectRate": 39.655
        },
        {
            "number": 1182,
            "name": "부분수열의 합",
            "category": "브루트 포스",
            "time": "1902041151",
            "collectCount": 5376,
            "submitCount": 18369,
            "collectRate": 44.864
        },
        {
            "number": 1476,
            "name": "날짜 계산",
            "category": "수학",
            "time": "1901311351",
            "collectCount": 6229,
            "submitCount": 11448,
            "collectRate": 67.64
        },
        {
            "number": 1476,
            "name": "날짜 계산",
            "category": "중국인의 나머지 정리",
            "time": "1901311351",
            "collectCount": 6229,
            "submitCount": 11448,
            "collectRate": 67.64
        },
        {
            "number": 1509,
            "name": "팰린드롬 분할",
            "category": "다이나믹 프로그래밍",
            "time": "1902172132",
            "collectCount": 1215,
            "submitCount": 3931,
            "collectRate": 45.694
        },
        {
            "number": 1509,
            "name": "팰린드롬 분할",
            "category": "문자열 처리",
            "time": "1902172132",
            "collectCount": 1215,
            "submitCount": 3931,
            "collectRate": 45.694
        },
        {
            "number": 1644,
            "name": "소수의 연속합",
            "category": "정수론",
            "time": "1902041358",
            "collectCount": 2228,
            "submitCount": 7431,
            "collectRate": 42.422
        },
        {
            "number": 1644,
            "name": "소수의 연속합",
            "category": "에라토스테네스의 체",
            "time": "1902041358",
            "collectCount": 2228,
            "submitCount": 7431,
            "collectRate": 42.422
        },
        {
            "number": 1644,
            "name": "소수의 연속합",
            "category": "투 포인터",
            "time": "1902041358",
            "collectCount": 2228,
            "submitCount": 7431,
            "collectRate": 42.422
        },
        {
            "number": 1759,
            "name": "암호 만들기",
            "category": "백트래킹",
            "time": "1902040152",
            "collectCount": 4694,
            "submitCount": 14800,
            "collectRate": 44.2
        },
        {
            "number": 1806,
            "name": "부분합",
            "category": "투 포인터",
            "time": "1902041318",
            "collectCount": 1984,
            "submitCount": 11230,
            "collectRate": 24.943
        },
        {
            "number": 1987,
            "name": "알파벳",
            "category": "DFS",
            "time": "1902040212",
            "collectCount": 5130,
            "submitCount": 24722,
            "collectRate": 31.267
        },
        {
            "number": 1987,
            "name": "알파벳",
            "category": "백트래킹",
            "time": "1902040212",
            "collectCount": 5130,
            "submitCount": 24722,
            "collectRate": 31.267
        },
        {
            "number": 2003,
            "name": "수들의 합 2",
            "category": "투 포인터",
            "time": "1902041232",
            "collectCount": 3716,
            "submitCount": 11048,
            "collectRate": 50.786
        },
        {
            "number": 2251,
            "name": "물통",
            "category": "BFS",
            "time": "1902031729",
            "collectCount": 1712,
            "submitCount": 5092,
            "collectRate": 47.098
        },
        {
            "number": 2529,
            "name": "부등호",
            "category": "그리디 알고리즘",
            "time": "1902042050",
            "collectCount": 1356,
            "submitCount": 3584,
            "collectRate": 51.286
        },
        {
            "number": 2529,
            "name": "부등호",
            "category": "위상 정렬",
            "time": "1902042050",
            "collectCount": 1356,
            "submitCount": 3584,
            "collectRate": 51.286
        },
        {
            "number": 6603,
            "name": "로또",
            "category": "BFS",
            "time": "1901312036",
            "collectCount": 5869,
            "submitCount": 15826,
            "collectRate": 53.569
        },
        {
            "number": 6603,
            "name": "로또",
            "category": "브루트 포스",
            "time": "1901312036",
            "collectCount": 5869,
            "submitCount": 15826,
            "collectRate": 53.569
        },
        {
            "number": 6603,
            "name": "로또",
            "category": "DFS",
            "time": "1901312036",
            "collectCount": 5869,
            "submitCount": 15826,
            "collectRate": 53.569
        },
        {
            "number": 6603,
            "name": "로또",
            "category": "백트래킹",
            "time": "1901312036",
            "collectCount": 5869,
            "submitCount": 15826,
            "collectRate": 53.569
        },
        {
            "number": 6603,
            "name": "로또",
            "category": "입문용",
            "time": "1901312036",
            "collectCount": 5869,
            "submitCount": 15826,
            "collectRate": 53.569
        },
        {
            "number": 9095,
            "name": "1, 2, 3 더하기",
            "category": "다이나믹 프로그래밍",
            "time": "1901311511",
            "collectCount": 14095,
            "submitCount": 32663,
            "collectRate": 61.989
        },
        {
            "number": 9663,
            "name": "N-Queen",
            "category": "백트래킹",
            "time": "1902211425",
            "collectCount": 5244,
            "submitCount": 13967,
            "collectRate": 57.563
        },
        {
            "number": 10971,
            "name": "외판원 순회 2",
            "category": "None",
            "time": "1901311659",
            "collectCount": 3072,
            "submitCount": 14700,
            "collectRate": 35.335
        },
        {
            "number": 10973,
            "name": "이전 순열",
            "category": "순열",
            "time": "1901311157",
            "collectCount": 2085,
            "submitCount": 3956,
            "collectRate": 66.044
        },
        {
            "number": 10974,
            "name": "모든 순열",
            "category": "순열",
            "time": "1901311253",
            "collectCount": 3801,
            "submitCount": 9177,
            "collectRate": 57.539
        },
        {
            "number": 11048,
            "name": "이동하기",
            "category": "다이나믹 프로그래밍",
            "time": "1902172012",
            "collectCount": 5099,
            "submitCount": 12722,
            "collectRate": 58.535
        },
        {
            "number": 14889,
            "name": "스타트와 링크",
            "category": "브루트 포스",
            "time": "1902050040",
            "collectCount": 3909,
            "submitCount": 12662,
            "collectRate": 50.348
        },
        {
            "number": 1000,
            "name": "A+B",
            "category": "수학",
            "time": "1901202031",
            "collectCount": 70285,
            "submitCount": 217609,
            "collectRate": 45.165
        },
        {
            "number": 1001,
            "name": "A-B",
            "category": "수학",
            "time": "1901202032",
            "collectCount": 58024,
            "submitCount": 94106,
            "collectRate": 72.1
        },
        {
            "number": 1001,
            "name": "A-B",
            "category": "사칙연산",
            "time": "1901202032",
            "collectCount": 58024,
            "submitCount": 94106,
            "collectRate": 72.1
        },
        {
            "number": 1038,
            "name": "감소하는 수",
            "category": "다이나믹 프로그래밍",
            "time": "1901292114",
            "collectCount": 1525,
            "submitCount": 7864,
            "collectRate": 29.692
        },
        {
            "number": 1038,
            "name": "감소하는 수",
            "category": "브루트 포스",
            "time": "1901292114",
            "collectCount": 1525,
            "submitCount": 7864,
            "collectRate": 29.692
        },
        {
            "number": 2231,
            "name": "분해합",
            "category": "브루트 포스",
            "time": "1901291730",
            "collectCount": 4644,
            "submitCount": 10497,
            "collectRate": 53.41
        },
        {
            "number": 2309,
            "name": "일곱 난쟁이",
            "category": "브루트 포스",
            "time": "1901291655",
            "collectCount": 9140,
            "submitCount": 28066,
            "collectRate": 47.004
        },
        {
            "number": 2438,
            "name": "별 찍기 - 1",
            "category": "출력",
            "time": "1901211033",
            "collectCount": 37001,
            "submitCount": 70436,
            "collectRate": 61.955
        },
        {
            "number": 2558,
            "name": "A+B - 2",
            "category": "None",
            "time": "1901202034",
            "collectCount": 26620,
            "submitCount": 39633,
            "collectRate": 75.374
        },
        {
            "number": 2739,
            "name": "구구단",
            "category": "출력",
            "time": "1901211030",
            "collectCount": 33717,
            "submitCount": 69921,
            "collectRate": 55.785
        },
        {
            "number": 2741,
            "name": "N 찍기",
            "category": "출력",
            "time": "1901210138",
            "collectCount": 37011,
            "submitCount": 99331,
            "collectRate": 45.564
        },
        {
            "number": 2742,
            "name": "기찍 N",
            "category": "출력",
            "time": "1901211027",
            "collectCount": 32067,
            "submitCount": 55454,
            "collectRate": 65.202
        },
        {
            "number": 7287,
            "name": "등록",
            "category": "출력",
            "time": "1901202035",
            "collectCount": 28986,
            "submitCount": 74043,
            "collectRate": 47.725
        },
        {
            "number": 7568,
            "name": "덩치",
            "category": "브루트 포스",
            "time": "1901292005",
            "collectCount": 4265,
            "submitCount": 8162,
            "collectRate": 61.812
        },
        {
            "number": 9498,
            "name": "시험 성적",
            "category": "구현",
            "time": "1901202038",
            "collectCount": 29510,
            "submitCount": 54856,
            "collectRate": 61.523
        },
        {
            "number": 10718,
            "name": "We love kriii",
            "category": "출력",
            "time": "1901202036",
            "collectCount": 35422,
            "submitCount": 52503,
            "collectRate": 76.454
        },
        {
            "number": 10869,
            "name": "사칙연산",
            "category": "사칙연산",
            "time": "1901202033",
            "collectCount": 33110,
            "submitCount": 65117,
            "collectRate": 57.623
        },
        {
            "number": 10871,
            "name": "X보다 작은 수",
            "category": "구현",
            "time": "1901202041",
            "collectCount": 23454,
            "submitCount": 47748,
            "collectRate": 57.971
        },
        {
            "number": 10972,
            "name": "다음 순열",
            "category": "순열",
            "time": "1901311153",
            "collectCount": 2717,
            "submitCount": 8547,
            "collectRate": 45.664
        },
        {
            "number": 10998,
            "name": "A×B",
            "category": "사칙연산",
            "time": "1901202032",
            "collectCount": 34755,
            "submitCount": 48955,
            "collectRate": 77.006
        },
        {
            "number": 11723,
            "name": "집합",
            "category": "None",
            "time": "1901311126",
            "collectCount": 3051,
            "submitCount": 16144,
            "collectRate": 27.812
        },
        {
            "number": 15552,
            "name": "빠른 A+B",
            "category": "None",
            "time": "1901210147",
            "collectCount": 12519,
            "submitCount": 31802,
            "collectRate": 49.974
        },
        {
            "number": 1167,
            "name": "트리의 지름",
            "category": "트리",
            "time": "1812041451",
            "collectCount": 1778,
            "submitCount": 6487,
            "collectRate": 36.698
        },
        {
            "number": 1260,
            "name": "DFS와 BFS",
            "category": "BFS",
            "time": "1811281902",
            "collectCount": 13004,
            "submitCount": 71572,
            "collectRate": 29.998
        },
        {
            "number": 1260,
            "name": "DFS와 BFS",
            "category": "DFS",
            "time": "1811281902",
            "collectCount": 13004,
            "submitCount": 71572,
            "collectRate": 29.998
        },
        {
            "number": 1929,
            "name": "소수 구하기",
            "category": "에라토스테네스의 체",
            "time": "1811111558",
            "collectCount": 8542,
            "submitCount": 43137,
            "collectRate": 28.382
        },
        {
            "number": 1967,
            "name": "트리의 지름",
            "category": "BFS",
            "time": "1812041407",
            "collectCount": 2335,
            "submitCount": 6974,
            "collectRate": 46.85
        },
        {
            "number": 1967,
            "name": "트리의 지름",
            "category": "트리",
            "time": "1812041407",
            "collectCount": 2335,
            "submitCount": 6974,
            "collectRate": 46.85
        },
        {
            "number": 1978,
            "name": "소수 찾기",
            "category": "수학",
            "time": "1811111537",
            "collectCount": 12491,
            "submitCount": 32464,
            "collectRate": 48.969
        },
        {
            "number": 1978,
            "name": "소수 찾기",
            "category": "에라토스테네스의 체",
            "time": "1811111537",
            "collectCount": 12491,
            "submitCount": 32464,
            "collectRate": 48.969
        },
        {
            "number": 1991,
            "name": "트리 순회",
            "category": "트리",
            "time": "1812032302",
            "collectCount": 5796,
            "submitCount": 12494,
            "collectRate": 62.209
        },
        {
            "number": 2583,
            "name": "영역 구하기",
            "category": "BFS",
            "time": "1811112336",
            "collectCount": 5535,
            "submitCount": 12854,
            "collectRate": 55.273
        },
        {
            "number": 2583,
            "name": "영역 구하기",
            "category": "DFS",
            "time": "1811112336",
            "collectCount": 5535,
            "submitCount": 12854,
            "collectRate": 55.273
        },
        {
            "number": 2636,
            "name": "치즈",
            "category": "None",
            "time": "1811120218",
            "collectCount": 1614,
            "submitCount": 4657,
            "collectRate": 49.252
        },
        {
            "number": 2667,
            "name": "단지번호붙이기",
            "category": "BFS",
            "time": "1811182109",
            "collectCount": 9963,
            "submitCount": 38936,
            "collectRate": 38.033
        },
        {
            "number": 2667,
            "name": "단지번호붙이기",
            "category": "DFS",
            "time": "1811182109",
            "collectCount": 9963,
            "submitCount": 38936,
            "collectRate": 38.033
        },
        {
            "number": 3790,
            "name": "Crazy tea party",
            "category": "None",
            "time": "1812121418",
            "collectCount": 6,
            "submitCount": 11,
            "collectRate": 100.0
        },
        {
            "number": 6588,
            "name": "골드바흐의 추측",
            "category": "정수론",
            "time": "1811111631",
            "collectCount": 3437,
            "submitCount": 18271,
            "collectRate": 26.766
        },
        {
            "number": 6588,
            "name": "골드바흐의 추측",
            "category": "에라토스테네스의 체",
            "time": "1811111631",
            "collectCount": 3437,
            "submitCount": 18271,
            "collectRate": 26.766
        },
        {
            "number": 10819,
            "name": "차이를 최대로",
            "category": "None",
            "time": "1812041610",
            "collectCount": 4079,
            "submitCount": 8779,
            "collectRate": 61.072
        },
        {
            "number": 10872,
            "name": "팩토리얼",
            "category": "구현",
            "time": "1811111724",
            "collectCount": 9329,
            "submitCount": 18267,
            "collectRate": 58.618
        },
        {
            "number": 11653,
            "name": "소인수분해",
            "category": "소인수분해",
            "time": "1811111644",
            "collectCount": 4252,
            "submitCount": 9995,
            "collectRate": 54.049
        },
        {
            "number": 13458,
            "name": "시험 감독",
            "category": "None",
            "time": "1812180002",
            "collectCount": 5468,
            "submitCount": 30383,
            "collectRate": 24.267
        },
        {
            "number": 13460,
            "name": "구슬 탈출 2",
            "category": "BFS",
            "time": "1812110134",
            "collectCount": 3318,
            "submitCount": 23059,
            "collectRate": 24.629
        },
        {
            "number": 13460,
            "name": "구슬 탈출 2",
            "category": "브루트 포스",
            "time": "1812110134",
            "collectCount": 3318,
            "submitCount": 23059,
            "collectRate": 24.629
        },
        {
            "number": 14500,
            "name": "테트로미노",
            "category": "브루트 포스",
            "time": "1812172301",
            "collectCount": 4227,
            "submitCount": 18728,
            "collectRate": 32.854
        },
        {
            "number": 14501,
            "name": "퇴사",
            "category": "다이나믹 프로그래밍",
            "time": "1812172152",
            "collectCount": 6709,
            "submitCount": 21435,
            "collectRate": 46.542
        },
        {
            "number": 14501,
            "name": "퇴사",
            "category": "브루트 포스",
            "time": "1812172152",
            "collectCount": 6709,
            "submitCount": 21435,
            "collectRate": 46.542
        },
        {
            "number": 14502,
            "name": "연구소",
            "category": "BFS",
            "time": "1812191342",
            "collectCount": 5847,
            "submitCount": 18624,
            "collectRate": 54.568
        },
        {
            "number": 14502,
            "name": "연구소",
            "category": "브루트 포스",
            "time": "1812191342",
            "collectCount": 5847,
            "submitCount": 18624,
            "collectRate": 54.568
        },
        {
            "number": 14502,
            "name": "연구소",
            "category": "DFS",
            "time": "1812191342",
            "collectCount": 5847,
            "submitCount": 18624,
            "collectRate": 54.568
        },
        {
            "number": 14888,
            "name": "연산자 끼워넣기",
            "category": "브루트 포스",
            "time": "1812172111",
            "collectCount": 4594,
            "submitCount": 14474,
            "collectRate": 46.583
        },
        {
            "number": 1008,
            "name": "A/B",
            "category": "수학",
            "time": "1810292304",
            "collectCount": 32180,
            "submitCount": 121781,
            "collectRate": 33.986
        },
        {
            "number": 1008,
            "name": "A/B",
            "category": "사칙연산",
            "time": "1810292304",
            "collectCount": 32180,
            "submitCount": 121781,
            "collectRate": 33.986
        },
        {
            "number": 1094,
            "name": "막대기",
            "category": "수학",
            "time": "1810292316",
            "collectCount": 6271,
            "submitCount": 10062,
            "collectRate": 73.448
        },
        {
            "number": 1094,
            "name": "막대기",
            "category": "시뮬레이션",
            "time": "1810292316",
            "collectCount": 6271,
            "submitCount": 10062,
            "collectRate": 73.448
        },
        {
            "number": 1212,
            "name": "8진수 2진수",
            "category": "진법",
            "time": "1811101721",
            "collectCount": 2953,
            "submitCount": 13591,
            "collectRate": 30.525
        },
        {
            "number": 1463,
            "name": "1로 만들기",
            "category": "다이나믹 프로그래밍",
            "time": "1810291924",
            "collectCount": 16972,
            "submitCount": 81374,
            "collectRate": 32.16
        },
        {
            "number": 1676,
            "name": "팩토리얼 0의 개수",
            "category": "None",
            "time": "1810311448",
            "collectCount": 4679,
            "submitCount": 12529,
            "collectRate": 46.46
        },
        {
            "number": 1934,
            "name": "최소공배수",
            "category": "유클리드 호제법",
            "time": "1810311203",
            "collectCount": 7799,
            "submitCount": 16193,
            "collectRate": 58.958
        },
        {
            "number": 2089,
            "name": "-2진수",
            "category": "None",
            "time": "1811102210",
            "collectCount": 1024,
            "submitCount": 2667,
            "collectRate": 45.653
        },
        {
            "number": 2193,
            "name": "이친수",
            "category": "다이나믹 프로그래밍",
            "time": "1810161449",
            "collectCount": 11012,
            "submitCount": 38721,
            "collectRate": 36.449
        },
        {
            "number": 2609,
            "name": "최대공약수와 최소공배수",
            "category": "None",
            "time": "1810311157",
            "collectCount": 9709,
            "submitCount": 18385,
            "collectRate": 66.259
        },
        {
            "number": 2745,
            "name": "진법 변환",
            "category": "진법",
            "time": "1810311249",
            "collectCount": 2699,
            "submitCount": 5682,
            "collectRate": 56.941
        },
        {
            "number": 9012,
            "name": "괄호",
            "category": "스택",
            "time": "1810101207",
            "collectCount": 12995,
            "submitCount": 44598,
            "collectRate": 39.071
        },
        {
            "number": 9095,
            "name": "1, 2, 3 더하기",
            "category": "다이나믹 프로그래밍",
            "time": "1810150009",
            "collectCount": 14095,
            "submitCount": 32663,
            "collectRate": 61.989
        },
        {
            "number": 9461,
            "name": "파도반 수열",
            "category": "다이나믹 프로그래밍",
            "time": "1810162125",
            "collectCount": 7120,
            "submitCount": 21606,
            "collectRate": 38.74
        },
        {
            "number": 9613,
            "name": "GCD 합",
            "category": "None",
            "time": "1810310857",
            "collectCount": 2480,
            "submitCount": 8979,
            "collectRate": 37.248
        },
        {
            "number": 10430,
            "name": "나머지",
            "category": "사칙연산",
            "time": "1810310718",
            "collectCount": 30707,
            "submitCount": 55560,
            "collectRate": 61.41
        },
        {
            "number": 10430,
            "name": "나머지",
            "category": "나머지 연산",
            "time": "1810310718",
            "collectCount": 30707,
            "submitCount": 55560,
            "collectRate": 61.41
        },
        {
            "number": 10799,
            "name": "쇠막대기",
            "category": "스택",
            "time": "1810101229",
            "collectCount": 6438,
            "submitCount": 14739,
            "collectRate": 60.445
        },
        {
            "number": 11005,
            "name": "진법 변환 2",
            "category": "진법",
            "time": "1810311227",
            "collectCount": 2525,
            "submitCount": 5938,
            "collectRate": 52.31
        },
        {
            "number": 11576,
            "name": "Base Conversion",
            "category": "None",
            "time": "1811102300",
            "collectCount": 1448,
            "submitCount": 3090,
            "collectRate": 57.943
        },
        {
            "number": 11650,
            "name": "좌표 정렬하기",
            "category": "정렬",
            "time": "1811062343",
            "collectCount": 5287,
            "submitCount": 13880,
            "collectRate": 51.151
        },
        {
            "number": 11651,
            "name": "좌표 정렬하기 2",
            "category": "정렬",
            "time": "1811062349",
            "collectCount": 4027,
            "submitCount": 7431,
            "collectRate": 68.058
        },
        {
            "number": 1011,
            "name": "Fly me to the Alpha Centauri",
            "category": "None",
            "time": "1809241943",
            "collectCount": 5185,
            "submitCount": 25779,
            "collectRate": 27.558
        },
        {
            "number": 1065,
            "name": "한수",
            "category": "브루트 포스",
            "time": "1809232111",
            "collectCount": 14024,
            "submitCount": 34905,
            "collectRate": 47.206
        },
        {
            "number": 1065,
            "name": "한수",
            "category": "탐색",
            "time": "1809232111",
            "collectCount": 14024,
            "submitCount": 34905,
            "collectRate": 47.206
        },
        {
            "number": 1110,
            "name": "더하기 사이클",
            "category": "수학",
            "time": "1809231557",
            "collectCount": 19949,
            "submitCount": 47336,
            "collectRate": 50.358
        },
        {
            "number": 1152,
            "name": "단어의 개수",
            "category": "문자열 처리",
            "time": "1809241829",
            "collectCount": 17123,
            "submitCount": 95280,
            "collectRate": 24.693
        },
        {
            "number": 1475,
            "name": "방 번호",
            "category": "수학",
            "time": "1809242048",
            "collectCount": 7675,
            "submitCount": 23721,
            "collectRate": 38.922
        },
        {
            "number": 1475,
            "name": "방 번호",
            "category": "문자열 처리",
            "time": "1809242048",
            "collectCount": 7675,
            "submitCount": 23721,
            "collectRate": 38.922
        },
        {
            "number": 1546,
            "name": "평균",
            "category": "None",
            "time": "1809222115",
            "collectCount": 16736,
            "submitCount": 43294,
            "collectRate": 47.643
        },
        {
            "number": 1874,
            "name": "스택 수열",
            "category": "스택",
            "time": "1810021846",
            "collectCount": 5297,
            "submitCount": 24986,
            "collectRate": 29.538
        },
        {
            "number": 1924,
            "name": "2007년",
            "category": "구현",
            "time": "1809222032",
            "collectCount": 23169,
            "submitCount": 63028,
            "collectRate": 44.469
        },
        {
            "number": 2292,
            "name": "벌집",
            "category": "None",
            "time": "1809241910",
            "collectCount": 10597,
            "submitCount": 26679,
            "collectRate": 46.509
        },
        {
            "number": 2750,
            "name": "수 정렬하기",
            "category": "None",
            "time": "1810091650",
            "collectCount": 16226,
            "submitCount": 40028,
            "collectRate": 58.365
        },
        {
            "number": 2751,
            "name": "수 정렬하기 2",
            "category": "None",
            "time": "1810091719",
            "collectCount": 9478,
            "submitCount": 51601,
            "collectRate": 32.347
        },
        {
            "number": 2839,
            "name": "설탕 배달",
            "category": "수학",
            "time": "1809222004",
            "collectCount": 21863,
            "submitCount": 100164,
            "collectRate": 29.228
        },
        {
            "number": 2839,
            "name": "설탕 배달",
            "category": "구현",
            "time": "1809222004",
            "collectCount": 21863,
            "submitCount": 100164,
            "collectRate": 29.228
        },
        {
            "number": 4344,
            "name": "평균은 넘겠지",
            "category": "None",
            "time": "1809231436",
            "collectCount": 15068,
            "submitCount": 46441,
            "collectRate": 38.659
        },
        {
            "number": 9012,
            "name": "괄호",
            "category": "스택",
            "time": "1810021946",
            "collectCount": 12995,
            "submitCount": 44598,
            "collectRate": 39.071
        },
        {
            "number": 10250,
            "name": "ACM 호텔",
            "category": "None",
            "time": "1809242031",
            "collectCount": 7360,
            "submitCount": 23966,
            "collectRate": 35.967
        },
        {
            "number": 10817,
            "name": "세 수",
            "category": "None",
            "time": "1809222103",
            "collectCount": 24970,
            "submitCount": 62949,
            "collectRate": 47.106
        },
        {
            "number": 10828,
            "name": "스택",
            "category": "스택",
            "time": "1810101205",
            "collectCount": 14320,
            "submitCount": 50782,
            "collectRate": 40.693
        },
        {
            "number": 11719,
            "name": "그대로 출력하기 2",
            "category": "출력",
            "time": "1809221929",
            "collectCount": 19750,
            "submitCount": 43708,
            "collectRate": 57.056
        },
        {
            "number": 11720,
            "name": "숫자의 합",
            "category": "출력",
            "time": "1809222047",
            "collectCount": 21273,
            "submitCount": 54971,
            "collectRate": 47.052
        },
        {
            "number": 2557,
            "name": "Hello World",
            "category": "출력",
            "time": "1809201254",
            "collectCount": 68909,
            "submitCount": 190107,
            "collectRate": 46.946
        },
        {
            "number": 10172,
            "name": "개",
            "category": "출력",
            "time": "1809201308",
            "collectCount": 28233,
            "submitCount": 90312,
            "collectRate": 37.56
        },
        {
            "number": 11718,
            "name": "그대로 출력하기",
            "category": "출력",
            "time": "1809221903",
            "collectCount": 22735,
            "submitCount": 132351,
            "collectRate": 25.34
        }
    ];

    for(let i = 0; i < dummy3.length; i++) {
        dummy3[i]['time'] = parseInt(parseInt(dummy3[i]['time'])/100);
    }

    const recommendDommy=[
        {"number":1920,"name":"수 찾기","category":"이분 탐색","time":null,"collectCount":6757,"submitCount":37889,"collectRate":27.975},
        {"number":1924,"name":"2007년","category":"구현","time":null,"collectCount":23169,"submitCount":63028,"collectRate":44.469},
        {"number":2178,"name":"미로 탐색","category":"BFS","time":null,"collectCount":11884,"submitCount":53826,"collectRate":34.017},
        {"number":2741,"name":"N 찍기","category":"출력","time":null,"collectCount":37011,"submitCount":99331,"collectRate":45.564},
        {"number":11053,"name":"가장 긴 증가하는 부분 수열","category":"다이나믹 프로그래밍","time":null,"collectCount":8464,"submitCount":33326,"collectRate":37.006}
    ]; 

    export default {
        name: "Intro",
        methods: {
            submitId: function () {
                this.$store.commit('setUserId', this.userId);
                this.$store.commit('setSolvedProblems', dummy3);
                this.$store.commit('setRecommend', recommendDommy);
                window.scrollTo({
                    top: document.body.scrollHeight,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        },
        computed: {
        },
        data() {
            return {
                userId: null
            }
        }
    }
</script>

<style scoped>
    #intro {
        background-image: url("../assets/background-main.png");
        background-size: cover;
        height: 100vh;
    }

    input {
        flex-grow: 2;
        padding: 10px;
        border: 1px solid white;
        margin-right: 10px;
        background-color: rgba(255,255,255,0.35);
        text-align: center;
        font-size: 16px;
        color: white;
        font-weight: 600;
    }

    button {
        flex-grow: 1;
        padding: 10px;
        border: 1px solid white;
        background-color: #2ed3e6;
        text-align: center;
        font-size: 16px;
        color: #1c1d20;
        font-weight: 600;
    }

    #title {
        position: absolute;
        left: 90px;
        top: 50px;
        padding: 10px;
        border: 0;
        background-color: transparent;
        text-align: left;
        font-size: 28px;
        font-weight: normal;
        color: white;
    }

    #inputSection {
        position: absolute;
        left: 38%;
        top: 47%;
        width: 360px;
        height: 300px;

    }

    #description1 {
        padding: 10px;
        border: 0;
        margin-top: 10px;
        background-color: transparent;
        text-align: center;
        font-size: 14px;
        color: #c6c6c6;
    }

    ::placeholder {
        color: white;
        opacity: .4;
    }
</style>