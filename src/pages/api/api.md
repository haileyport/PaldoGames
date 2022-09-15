# GET Method

[User Table]

- /api/user : 전체 유저를 불러오는 API
- /api/user/id/${id} : id로 유저를 찾는 API
- /api/user/email/${email} : email로 유저를 찾는 API

[Game Table]

- /api/game/${userId} : 유저 id로 해당 유저가 가진 game table을 가져오는 API

# POST Method

[Game Table]

- /api/game : 유저 id로 game 테이블을 생성하는 API

# PATCH Method

[User Table]

- /api/user : 유저 id로 해당 유저의 자기소개(aboutMe)를 수정하는 API

[Game Table]

- /api/game : 유저 id로 해당 유저의 게임 포인트(totalPoint)를 수정하는 API
