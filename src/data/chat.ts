import { ChatList, Message } from '../types/chat';

export const chatData: ChatList[] = [
  {
    id: 'u1',
    name: 'Alice Johnson',
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
    lastMsg: { msg: 'Hey, how are you?' },
    unreadMsgs: 2,
    lastMsgAt: new Date('2024-04-30T09:24:00'),
  },
  {
    id: 'u2',
    name: 'Bob Smith',
    image:
      'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
    lastMsg: { msg: "Let's meet tomorrow" },
    unreadMsgs: 0,
    lastMsgAt: new Date('2024-04-30T08:15:00'),
  },
  {
    id: 'u3',
    name: 'Charlie Davis',
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small/beautiful-woman-avatar-character-icon-free-vector.jpg',
    lastMsg: { photo: 'pic123.jpg' },
    unreadMsgs: 5,
    lastMsgAt: new Date('2024-04-29T21:45:00'),
  },
  {
    id: 'u4',
    name: 'Dana Lee',
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg',
    lastMsg: { msg: 'Can you call me?' },
    unreadMsgs: 0,
    lastMsgAt: new Date('2024-04-30T12:30:00'),
  },
  {
    id: 'u5',
    name: 'Edward Norton',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-3fHwHfTzFBOnb3uEH3Tj4klzmxgvLvahGGUts7R-dRPVI68TVElWbCWGmAuZe_ummY&usqp=CAU',
    lastMsg: { photo: 'pic123.jpg' },
    unreadMsgs: 3,
    lastMsgAt: new Date('2024-04-30T14:20:00'),
  },
  {
    id: 'u6',
    name: 'Fiona Graham',
    image:
      'https://st3.depositphotos.com/1007566/13175/v/450/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg',
    lastMsg: { msg: "I'll send the files" },
    unreadMsgs: 4,
    lastMsgAt: new Date('2024-04-28T16:50:00'),
  },
  {
    id: 'u7',
    name: 'George Ray',
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/002/002/253/small_2x/beautiful-woman-wearing-sunglasses-avatar-character-icon-free-vector.jpg',
    lastMsg: { msg: 'See you there' },
    unreadMsgs: 2,
    lastMsgAt: new Date('2024-04-27T19:30:00'),
  },
  {
    id: 'u8',
    name: 'Hanna Montana',
    image:
      'https://media.istockphoto.com/id/1371797889/vector/young-smiling-man-avatar-3d-vector-people-character-illustration-cartoon-minimal-style-3d.jpg?s=612x612&w=0&k=20&c=WykJb6hyEUv8T9k86g-LG9u980sEwqK8FG1m1tXgnSI=',
    lastMsg: { msg: 'See you there, to fuck the shit of you, and send nodes you little bitch' },
    unreadMsgs: 7,
    lastMsgAt: new Date('2024-04-30T11:05:00'),
  },
  {
    id: 'u9',
    name: 'Ivan Clark',
    image:
      'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
    lastMsg: { msg: 'All set for the weekend?' },
    unreadMsgs: 1,
    lastMsgAt: new Date('2024-04-30T18:40:00'),
  },
  {
    id: 'u10',
    name: 'Julia Chang',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp12fKlOpYGpORGIiD5rJGvcMx9Z-UCHXYbGGxd4YvFw&s',
    lastMsg: { msg: 'That sounds great' },
    unreadMsgs: 0,
    lastMsgAt: new Date('2024-04-29T20:10:00'),
  },
];

export const messages: Message[] = [
  {
    id: 'm1',
    receiver: true,
    sender: false,
    msg: { msg: 'Hello, how are you?' },
    date: new Date('2024-04-30T12:00:00'),
    user: {
      id: 'u1',
      name: 'Alice Johnson',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp12fKlOpYGpORGIiD5rJGvcMx9Z-UCHXYbGGxd4YvFw&',
    },
  },
  {
    id: 'm120',
    receiver: true,
    sender: false,
    msg: { msg: 'Hello, how are you? bro' },
    date: new Date('2024-04-30T12:00:00'),
    user: {
      id: 'u1',
      name: 'Alice Johnson',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp12fKlOpYGpORGIiD5rJGvcMx9Z-UCHXYbGGxd4YvFw&',
    },
  },
  {
    id: 'm1200',
    receiver: true,
    sender: false,
    msg: { msg: 'Hello, how are you? bro' },
    date: new Date('2024-04-30T12:00:00'),
    user: {
      id: 'u1',
      name: 'Alice Johnson',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp12fKlOpYGpORGIiD5rJGvcMx9Z-UCHXYbGGxd4YvFw&',
    },
  },
  {
    id: 'm2',
    receiver: false,
    sender: true,
    msg: { msg: "I'm good, thanks! And you?" },
    date: new Date('2024-04-30T12:01:00'),
    user: {
      id: 'u2',
      name: 'Bob Smith',
      image:
        'https://media.istockphoto.com/id/1371797889/vector/young-smiling-man-avatar-3d-vector-people-character-illustration-cartoon-minimal-style-3d.jpg?s=612x612&w=0&k=20&c=WykJb6hyEUv8T9k86g-LG9u980sEwqK8FG1m1tXgnSI=',
    },
  },
  {
    id: 'm20',
    receiver: false,
    sender: true,
    msg: { msg: 'Sunny day bro' },
    date: new Date('2024-04-30T12:01:00'),
    user: {
      id: 'u2',
      name: 'Bob Smith',
      image:
        'https://media.istockphoto.com/id/1371797889/vector/young-smiling-man-avatar-3d-vector-people-character-illustration-cartoon-minimal-style-3d.jpg?s=612x612&w=0&k=20&c=WykJb6hyEUv8T9k86g-LG9u980sEwqK8FG1m1tXgnSI=',
    },
  },
  // Repeating pattern for simplicity
  {
    id: 'm3',
    receiver: true,
    sender: false,
    msg: { msg: 'Doing great, thanks for asking!' },
    date: new Date('2024-04-31T12:02:00'),
    user: {
      id: 'u1',
      name: 'Alice Johnson',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp12fKlOpYGpORGIiD5rJGvcMx9Z-UCHXYbGGxd4YvFw&',
    },
  },
  {
    id: 'm4',
    receiver: false,
    sender: true,
    msg: {
      msg: 'Doing great, like your unfailthy mother:)) smdl;svmdlksmdvlskndvmlksdnvklsnvd lkdsnvklsdvn!',
    },
    date: new Date('2024-04-31T12:03:00'),
    user: {
      id: 'u2',
      name: 'Bob Smith',
      image:
        'https://media.istockphoto.com/id/1371797889/vector/young-smiling-man-avatar-3d-vector-people-character-illustration-cartoon-minimal-style-3d.jpg?s=612x612&w=0&k=20&c=WykJb6hyEUv8T9k86g-LG9u980sEwqK8FG1m1tXgnSI=',
    },
  },
  // Additional objects up to 20 entries
  {
    id: 'm5',
    receiver: true,
    sender: false,
    msg: {
      msg: "Let's meet tomorrow if you're free - Let's meet tomorrow if you're free Let's meet tomorrow if you're free Let's meet tomorrow if you're free",
    },
    date: new Date('2024-04-33T12:04:00'),
    user: {
      id: 'u1',
      name: 'Alice Johnson',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp12fKlOpYGpORGIiD5rJGvcMx9Z-UCHXYbGGxd4YvFw&',
    },
  },
  // ... Fill in more messages as needed up to 20
];
