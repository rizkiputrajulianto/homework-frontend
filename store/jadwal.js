export const state = () => {
    return {Fullstack : {
        name : "Fullstack 5", 
        description: "Bootcamp Fullstack 5 adalah bootcamp yang akan memperlajari tentang web developer, dimana peserta akan memperlajari web developer dari segi Frontend dan Backend. Sehingga peserta akan menjadi seorang Fullstack Developer yang handal",
        waktuBootcamp: {mulai: "5 Juli 2021", selesai: "10 Desember 2021"},
        img: "https://yt3.ggpht.com/ytc/AKedOLS9dWMeg56U0ZEab4dixDnNuhqnp824JIOBuZcc=s900-c-k-c0x00ffffff-no-rj",
        jadwal:[{
            session: 1, judul: "Web Fundamental", materi:[{namaMateri: "Introduction", type: "Power Point", file: ""}], tanggal:"5 Juli 2021"
        },
        {
            session: 2, judul: "Web Fundamental", materi:[{namaMateri: "History of HTML", type: "Power Point", file: ""}], tanggal:"7 Juli 2021", file:""
        },
        {
            session: 3, judul: "Web Fundamental", materi:[{namaMateri: "History of CSS", type: "Power Point", file: ""}], tanggal:"9 Juli 2021", file:""
        },
        {
            session: 4, judul: "Web Fundamental", materi:[{namaMateri: "History of Javascript", type: "Power Point", file: ""}], tanggal:"12 Juli 2021", file:""
        },
        {
            session: 5, judul: "Web Fundamental", materi:[{namaMateri: "Jquery", type: "Power Point", file: ""}], tanggal:"14 Juli 2021", file:""
        },]
    },
         Frontend : {
        name : "Frontend 5", 
        description: "Bootcamp Frontend 5 adalah bootcamp yang akan memperlajari tentang web developer, dimana peserta akan memperlajari web developer dari segi Frontend. Sehingga peserta akan menjadi seorang Frontend Developer yang handal",
        waktuBootcamp: {mulai: "3 Agustus 2021", selesai: "15 Desember 2021"},
        img: "https://yt3.ggpht.com/ytc/AKedOLS9dWMeg56U0ZEab4dixDnNuhqnp824JIOBuZcc=s900-c-k-c0x00ffffff-no-rj",
        jadwal:[{
            session: 1, judul: "Web Fundamental", materi:[{namaMateri: "Introduction", type: "Power Point", file: ""}], tanggal:"3 Agustus 2021", file:""
        },
        {
            session: 2, judul: "Framework Frontend", materi:[{namaMateri: "Node Js", type: "Power Point", file: ""}], tanggal:"5 Agustus 2021", file:""
        },
        {
            session: 3, judul: "Angular", materi:[{namaMateri: "Introduction", type: "Power Point", file: ""}], tanggal:"7 Agustus 2021", file:""
        },
        {
            session: 4, judul: "React", materi:[{namaMateri: "Introduction", type: "Power Point", file: ""}], tanggal:"9 Agustus 2021", file:""
        },
        {
            session: 5, judul: "Vue", materi:[{namaMateri: "Introduction", type: "Power Point", file: ""}], tanggal:"14 Juli 2021", file:""
        },]
    }, Backend : {
        name : "Backend 5", 
        description: "Bootcamp Backend 5 adalah bootcamp yang akan memperlajari tentang web developer, dimana peserta akan memperlajari web developer dari segi Backend. Sehingga peserta akan menjadi seorang Backend Developer yang handal",
        waktuBootcamp: {mulai: "3 Agustus 2021", selesai: "15 Desember 2021"},
        img: "https://yt3.ggpht.com/ytc/AKedOLS9dWMeg56U0ZEab4dixDnNuhqnp824JIOBuZcc=s900-c-k-c0x00ffffff-no-rj",
        jadwal:[{
            session: 1, judul: "Pengenalan", materi:[{namaMateri: "Introduction", type: "Power Point", file: ""}], tanggal:"3 Agustus 2021", file:""
        },
        {
            session: 2, judul: "Framework Backend", materi:[{namaMateri: "PHP Language", type: "Power Point", file: ""}], tanggal:"5 Agustus 2021", file:""
        },
        {
            session: 3, judul: "Database", materi:[{namaMateri: "MySQL", type: "Power Point", file: ""}], tanggal:"7 Agustus 2021", file:""
        },
        {
            session: 4, judul: "Media Database", materi:[{namaMateri: "Amazone Web Service (AWS)", type: "Power Point", file: ""}], tanggal:"9 Agustus 2021", file:""
        },
        {
            session: 5, judul: "Pembuatan API", materi:[{namaMateri: "Express Js", type: "Power Point", file: ""}], tanggal:"14 Juli 2021", file:""
        },]
    }, Member: {
             tutorSPV:[{
                 name: "Ghany Abdillah Ersa",
                 role: "Tutor",
                 img: ""
             },
            {
                name: "Atika Rahmawati",
                role: "SPV",
                img: "",
            }],
            peserta:[{
                name: "Alvin",
                role: "Student",
                img: "",
            },{
                name: "Catur Rachmadi",
                role: "Student",
                img: ""
            },{
                name: "Claudia Ekklesia",
                role: "Student",
                img: ""
            },{
                name: "Deta",
                role: "Student",
                img: ""
            },{
                name: "Fakhri Rizal",
                role: "Student",
                img: ""
            },{
                name: "Gregorious Kevin",
                role: "Student",
                img: ""
            },{
                name: "M Muzzammil Ambiya",
                role: "Student",
                img: ""
            },{
                name: "M Nabil Fadhlurrahman",
                role: "Student",
                img: ""
            },{
                name: "M Rizqi Multazzam",
                role: "Student",
                img: ""
            },{
                name: "Nailah Na'fiah",
                role: "Student",
                img: ""
            },{
                name: "Rio Crisel",
                role: "Student",
                img: ""
            },{
                name: "Rio Judeen",
                role: "Student",
                img: ""
            },{
                name: "Roy Rasel",
                role: "Student",
                img: ""
            },{
                name: "Rizki Putra",
                role: "Student",
                img: ""
            },{
                name: "Syanintika Safira",
                role: "Student",
                img: ""
            },]
         }}
}

export const actions = {
    edit({commit}, data){
        commit("ngedit", data);
    },
    createSession({commit}, datas){
        commit("addSession", datas);
    },
    createMateri({commit}, dat){
        commit("addMateri", dat);
    }
}

export const mutations = {
    ngedit(state, lists){

    },
    addSession(state, list){
        if(list.name === "Fullstack 5"){
            state.Fullstack.jadwal.push(list);
            state.Fullstack.jadwal.sort((a,b)=>{return a.session - b.session}); //sortir
        } else if(list.name === "Frontend 5"){
            state.Frontend.jadwal.push(list);
            state.Frontend.jadwal.sort((a,b)=>{return a.session - b.session}); //sortir
        } else {
            state.Backend.jadwal.push(list);
            state.Backend.jadwal.sort((a,b)=> {return a.session - b.session}); //sortir
        }
    },
    addMateri(state, data){
         if(list.name === "Fullstack 5"){
           state.Fullstack.jadwal[data.session].materi.push(data.materi);
        } else if(list.name === "Frontend 5"){
            state.Frontend.jadwal[data.session].materi.push(data.materi);
        } else {
           state.Backend.jadwal[data.session].materi.push(data.materi);
        }
    }
}