import '../style.css';

const navBar = () => {
  const app = document.createElement('div');
  const header = document.createElement('header');

  header.classList.add(
    'max-w-7xl',
    'mx-auto',
    'px-4',
    'sm:px-6',
    'lg:px-8',
    'mt-4',
  );
  header.innerHTML = `<div class="flex justify-between h-16">
  <div class="logo">
    <svg
      width="155px"
      height="43px"
      viewBox="0 0 155 43"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Desktop-HD"
          transform="translate(-793.000000, -178.000000)"
        >
          <g
            id="acme-logo-1"
            transform="translate(793.000000, 178.000000)"
          >
            <path
              d="M4.76073423,33.5416645 L2.96008108,33.5416645 C1.46803153,33.5416645 0.258054054,32.3397452 0.258054054,30.8576323 L0.258054054,12.0166968 C0.258054054,10.5345839 1.46803153,9.33266452 2.96008108,9.33266452 L4.4646982,9.33266452 C5.95674775,9.33266452 7.16672523,10.5345839 7.16672523,12.0166968 L7.16672523,31.1516968 C7.16672523,32.4715194 6.08940541,33.5416645 4.76073423,33.5416645"
              id="Fill-80"
              fill="#221F20"
            ></path>
            <path
              d="M42.7113671,42.8740516 L40.910714,42.8740516 C39.4186644,42.8740516 38.2086869,41.6721323 38.2086869,40.1900194 L38.2086869,2.68430968 C38.2086869,1.20219677 39.4186644,0.000277419355 40.910714,0.000277419355 L42.4153311,0.000277419355 C43.9073806,0.000277419355 45.1173581,1.20219677 45.1173581,2.68430968 L45.1173581,40.4840839 C45.1173581,41.8039065 44.0400383,42.8740516 42.7113671,42.8740516"
              id="Fill-81"
              fill="#221F20"
            ></path>
            <path
              d="M17.4109685,42.8740516 L15.6103153,42.8740516 C14.1182658,42.8740516 12.9082883,41.6721323 12.9082883,40.1900194 L12.9082883,2.68430968 C12.9082883,1.20219677 14.1182658,0.000277419355 15.6103153,0.000277419355 L17.1149324,0.000277419355 C18.606982,0.000277419355 19.8169595,1.20219677 19.8169595,2.68430968 L19.8169595,40.4840839 C19.8169595,41.8039065 18.7396396,42.8740516 17.4109685,42.8740516"
              id="Fill-82"
              fill="#221F20"
            ></path>
            <path
              d="M55.3615315,33.5416645 L53.5608784,33.5416645 C52.0688288,33.5416645 50.8588514,32.3397452 50.8588514,30.8576323 L50.8588514,12.0166968 C50.8588514,10.5345839 52.0688288,9.33266452 53.5608784,9.33266452 L55.0654955,9.33266452 C56.557545,9.33266452 57.7675225,10.5345839 57.7675225,12.0166968 L57.7675225,31.1516968 C57.7675225,32.4715194 56.6902027,33.5416645 55.3615315,33.5416645"
              id="Fill-83"
              fill="#221F20"
            ></path>
            <path
              d="M30.0611329,34.3008919 L28.2604797,34.3008919 C26.7684302,34.3008919 25.5584527,33.0989726 25.5584527,31.6168597 L25.5584527,13.31065 C25.5584527,11.8278435 26.7684302,10.6266177 28.2604797,10.6266177 L29.7650968,10.6266177 C31.2571464,10.6266177 32.4671239,11.8278435 32.4671239,13.31065 L32.4671239,31.9109242 C32.4671239,33.2307468 31.3898041,34.3008919 30.0611329,34.3008919"
              id="Fill-84"
              fill="#221F20"
            ></path>
            <path
              d="M88.2175518,23.48445 L86.7939257,20.4134177 L86.7750743,20.4134177 L85.3696014,23.48445 L88.2175518,23.48445 Z M80.5164257,27.4674984 L86.3812905,14.941321 C86.4378446,14.8296597 86.5691059,14.7367242 86.6996689,14.7367242 L86.8874842,14.7367242 C87.0180473,14.7367242 87.1500068,14.8296597 87.2058626,14.941321 L93.0707275,27.4674984 C93.1831374,27.7095468 93.0330248,27.9515952 92.7523491,27.9515952 L90.6724167,27.9515952 C90.3351869,27.9515952 90.1850743,27.8399339 90.0161104,27.4862242 L89.3416509,26.0159016 L84.2455023,26.0159016 L83.5710428,27.50495 C83.4774842,27.7282726 83.2708176,27.9515952 82.8965833,27.9515952 L80.8355023,27.9515952 C80.5541284,27.9515952 80.4040158,27.7095468 80.5164257,27.4674984 L80.5164257,27.4674984 Z"
              id="Fill-85"
              fill="#646384"
            ></path>
            <path
              d="M107.797752,14.7366548 C109.671716,14.7366548 111.058338,15.3136871 112.33255,16.4677516 C112.500815,16.616171 112.500815,16.8394935 112.350703,16.9886065 L110.889374,18.4963806 C110.758113,18.6267677 110.552144,18.6267677 110.420883,18.4963806 C109.727572,17.8818968 108.809441,17.5469129 107.891311,17.5469129 C105.774374,17.5469129 104.218788,19.2967355 104.218788,21.3815419 C104.218788,23.446929 105.793225,25.1593 107.910162,25.1593 C108.79059,25.1593 109.746423,24.8430419 110.420883,24.2660097 C110.552144,24.1543484 110.795815,24.1543484 110.908225,24.2847355 L112.369554,25.8292677 C112.500815,25.9596548 112.481964,26.2017032 112.350703,26.3320903 C111.076491,27.5603645 109.46505,28.1373968 107.797752,28.1373968 C104.050523,28.1373968 101.033608,25.1780258 101.033608,21.4557516 C101.033608,17.7334774 104.050523,14.7366548 107.797752,14.7366548"
              id="Fill-86"
              fill="#646384"
            ></path>
            <path
              d="M123.386773,15.0344645 C123.405624,14.8666258 123.57389,14.7369323 123.724002,14.7369323 L124.023529,14.7369323 C124.117786,14.7369323 124.286052,14.8111419 124.342606,14.9228032 L128.689588,22.9631097 L128.727291,22.9631097 L133.074273,14.9228032 C133.130128,14.8111419 133.298394,14.7369323 133.392651,14.7369323 L133.692178,14.7369323 C133.842291,14.7369323 134.010556,14.8666258 134.029408,15.0344645 L136.147043,27.5419161 C136.184047,27.7839645 136.015782,27.9511097 135.790962,27.9511097 L133.579768,27.9511097 C133.410804,27.9511097 133.242538,27.8026903 133.223687,27.6535774 L132.380264,21.9026742 L132.343259,21.9026742 L129.195083,27.9330774 C129.139227,28.0447387 128.970264,28.1376742 128.876705,28.1376742 L128.539475,28.1376742 C128.427065,28.1376742 128.276953,28.0447387 128.221097,27.9330774 L125.054768,21.9026742 L125.017065,21.9026742 L124.192493,27.6535774 C124.173642,27.8026903 124.023529,27.9511097 123.836412,27.9511097 L121.625218,27.9511097 C121.400399,27.9511097 121.232133,27.7839645 121.269836,27.5419161 L123.386773,15.0344645 Z"
              id="Fill-87"
              fill="#646384"
            ></path>
            <path
              d="M146.039673,15.2764435 C146.039673,15.0905726 146.189786,14.9227339 146.395755,14.9227339 L154.152736,14.9227339 C154.358705,14.9227339 154.508818,15.0905726 154.508818,15.2764435 L154.508818,17.3050726 C154.508818,17.4909435 154.358705,17.6587823 154.152736,17.6587823 L148.962331,17.6587823 L148.962331,19.9669113 L153.234606,19.9669113 C153.421723,19.9669113 153.590687,20.1340565 153.590687,20.320621 L153.590687,22.34925 C153.590687,22.5538468 153.421723,22.7029597 153.234606,22.7029597 L148.962331,22.7029597 L148.962331,25.2156855 L154.152736,25.2156855 C154.358705,25.2156855 154.508818,25.3828306 154.508818,25.5687016 L154.508818,27.5980242 C154.508818,27.7838952 154.358705,27.9517339 154.152736,27.9517339 L146.395755,27.9517339 C146.189786,27.9517339 146.039673,27.7838952 146.039673,27.5980242 L146.039673,15.2764435 Z"
              id="Fill-88"
              fill="#646384"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  </div>
  <div class="flex hidden sm:ml-6 sm:flex sm:space-x-8">
    <nav class='home'>
      <button
        class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
      >
        Home
      </button>
    </nav>
    <nav class='menu'>
      <button
        class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
      >
        Menu
      </button>
    </nav>
    <nav class='contact'>
      <button
        class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
      >
        Contact us
      </button>
    </nav>
  </div>
</div>`;
  app.appendChild(header);

  return app;
};

export default navBar;
