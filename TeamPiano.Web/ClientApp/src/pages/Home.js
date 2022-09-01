import React, { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        var activeLink = document.getElementById("_home");
        console.log(activeLink);
        activeLink.className += " active";
    }, []);


    return (
        <>
            <h1>Home Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Potenti nullam ac tortor vitae purus faucibus. Eu augue ut lectus arcu bibendum at varius. Neque vitae tempus quam pellentesque nec nam aliquam sem. Tellus in hac habitasse platea dictumst vestibulum. Tellus id interdum velit laoreet id donec ultrices. Viverra vitae congue eu consequat ac felis donec et odio. Nec ultrices dui sapien eget mi proin sed. Sed libero enim sed faucibus. Diam volutpat commodo sed egestas egestas fringilla. Eu turpis egestas pretium aenean pharetra magna. Ut ornare lectus sit amet est. Morbi tincidunt augue interdum velit euismod in pellentesque. Eget dolor morbi non arcu risus quis varius quam. Elementum eu facilisis sed odio morbi quis commodo. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Lorem mollis aliquam ut porttitor leo a diam.

                Lectus quam id leo in vitae turpis massa sed. Tortor vitae purus faucibus ornare suspendisse sed nisi. Amet nulla facilisi morbi tempus. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Faucibus in ornare quam viverra orci. Non consectetur a erat nam at lectus urna duis convallis. Congue nisi vitae suscipit tellus. At varius vel pharetra vel turpis. Amet risus nullam eget felis eget nunc lobortis. Nulla pharetra diam sit amet nisl suscipit. Faucibus interdum posuere lorem ipsum. Nullam non nisi est sit amet. Tortor at risus viverra adipiscing at in tellus integer feugiat. Sodales ut eu sem integer vitae justo eget. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Vel quam elementum pulvinar etiam non. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Libero justo laoreet sit amet cursus sit amet dictum sit. Nisi vitae suscipit tellus mauris a. Sem viverra aliquet eget sit amet tellus cras adipiscing.

                Commodo elit at imperdiet dui. Velit egestas dui id ornare arcu odio ut sem nulla. Arcu felis bibendum ut tristique et egestas. Nullam non nisi est sit amet facilisis magna etiam tempor. Neque egestas congue quisque egestas diam in arcu cursus euismod. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Convallis aenean et tortor at. Volutpat ac tincidunt vitae semper quis lectus nulla. Massa sapien faucibus et molestie ac feugiat sed. Viverra adipiscing at in tellus integer feugiat. Sed risus pretium quam vulputate dignissim suspendisse. Sodales ut etiam sit amet nisl. Odio eu feugiat pretium nibh ipsum. Euismod lacinia at quis risus sed. Augue eget arcu dictum varius duis at. Integer quis auctor elit sed vulputate mi sit amet. Nulla aliquet porttitor lacus luctus accumsan tortor. In metus vulputate eu scelerisque felis. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. At imperdiet dui accumsan sit amet nulla facilisi.

                Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Velit sed ullamcorper morbi tincidunt ornare. Aliquam malesuada bibendum arcu vitae elementum curabitur. Aliquam eleifend mi in nulla posuere sollicitudin. Congue mauris rhoncus aenean vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Eget duis at tellus at urna condimentum. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Aliquam nulla facilisi cras fermentum odio eu feugiat. Malesuada fames ac turpis egestas maecenas. Faucibus nisl tincidunt eget nullam non nisi est. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Nulla facilisi nullam vehicula ipsum a. In fermentum et sollicitudin ac orci phasellus.

                Leo vel orci porta non. Fames ac turpis egestas sed tempus. Arcu odio ut sem nulla pharetra diam sit amet nisl. Varius duis at consectetur lorem donec massa. Nibh tellus molestie nunc non blandit massa enim nec dui. In ante metus dictum at tempor commodo ullamcorper a lacus. Viverra justo nec ultrices dui sapien eget. Et pharetra pharetra massa massa ultricies. Mi bibendum neque egestas congue quisque egestas diam. Tempor orci dapibus ultrices in iaculis nunc sed augue. Aliquam eleifend mi in nulla posuere sollicitudin. Amet consectetur adipiscing elit ut aliquam purus sit.</h1>
        </>
    )
}
export default Home;