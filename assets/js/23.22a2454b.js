(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{358:function(e,t,a){"use strict";a.r(t);var n=a(32),o=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/cloudlinux_installation/#hardware-compatibility"}},[e._v("Hardware compatibility")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/cloudlinux_installation/#converting-existing-servers"}},[e._v("Converting existing servers")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/cloudlinux_installation/#activation"}},[e._v("Activation")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/cloudlinux_installation/#installing-new-servers"}},[e._v("Installing new servers")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/cloudlinux_installation/#cloudlinux-os-images"}},[e._v("CloudLinux OS images")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/cloudlinux_installation/#net-install"}},[e._v("Net install")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/cloudlinux_installation/#provider-specific-guidelines"}},[e._v("Provider-specific guidelines")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/cloudlinux_installation/#uninstalling"}},[e._v("Uninstalling")])],1)]),e._v(" "),a("h3",{attrs:{id:"hardware-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-compatibility","aria-hidden":"true"}},[e._v("#")]),e._v(" Hardware compatibility")]),e._v(" "),a("p",[e._v("CloudLinux supports all the hardware supported by RHEL/CentOS, with few exceptions. Exceptions are usually hardware that require binary drivers, and that doesn't have any open source alternatives.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),a("p",[e._v("CloudLinux OS does not support ARM-based CPUs (e.g. Graviton)")])]),a("p",[e._v("With RHEL 8 ("),a("strong",[e._v("CloudLinux 8")]),e._v("), some devices are no longer supported. You can check the entire list here:\n"),a("a",{attrs:{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/considerations_in_adopting_rhel_8/hardware-enablement_considerations-in-adopting-rhel-8#removed-hardware-support_hardware-enablement",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/considerations_in_adopting_rhel_8/hardware-enablement_considerations-in-adopting-rhel-8#removed-hardware-support_hardware-enablement"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"converting-existing-servers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#converting-existing-servers","aria-hidden":"true"}},[e._v("#")]),e._v(" Converting existing servers")]),e._v(" "),a("p",[e._v("It is easy to convert your existing CentOS or AlmaLinux server to CloudLinux. The process takes a few minutes and replaces just a handful of RPMs.")]),e._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/cloudlinux_installation/#cldeploy-explained"}},[e._v("CLDeploy Explained")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("Get "),a("span",{staticClass:"notranslate"},[a("code",[e._v("<activation_key>")])]),e._v(" either by getting "),a("RouterLink",{attrs:{to:"/cloudlinux_installation/#getting-trial-license"}},[e._v("trial subscription")]),e._v(" or by "),a("a",{attrs:{href:"https://cln.cloudlinux.com/clweb/buy.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("purchasing subscription"),a("OutboundLink")],1),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("Download the conversion script: "),a("span",{staticClass:"notranslate"},[a("a",{attrs:{href:"https://repo.cloudlinux.com/cloudlinux/sources/cln/cldeploy",target:"_blank",rel:"noopener noreferrer"}},[e._v("cldeploy"),a("OutboundLink")],1)]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("If you have an activation key, run the following commands:")])])]),e._v(" "),a("div",{staticClass:"notranslate"},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ wget https://repo.cloudlinux.com/cloudlinux/sources/cln/cldeploy\n$ sh cldeploy -k <activation_key>\n")])])])]),e._v(" "),a("ul",[a("li",[e._v("If you have an IP-based license, run the following commands:")])]),e._v(" "),a("div",{staticClass:"notranslate"},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sh cldeploy -i\n")])])])]),e._v(" "),a("ul",[a("li",[e._v("Reboot by running the following command:")])]),e._v(" "),a("div",{staticClass:"notranslate"},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ reboot\n")])])])]),e._v(" "),a("p",[e._v("The script automatically detects and supports the following control panels:")]),e._v(" "),a("ul",[a("li",[e._v("cPanel with EA4 ("),a("a",{attrs:{href:"https://blog.cpanel.com/its-been-a-long-road-but-it-will-be-time-to-say-goodbye-soon/",target:"_blank",rel:"noopener noreferrer"}},[e._v("EA3 is not supported"),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("li",[e._v("Plesk")]),e._v(" "),a("li",[e._v("DirectAdmin")]),e._v(" "),a("li",[e._v("InterWorx "),a("sup",[e._v("*")])])]),e._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),a("p",[e._v("CloudLinux 8 supports cPanel 11.94 and newer, Plesk Obsidian 18.0.33.0 and newer and DirectAdmin out of the box.")])]),a("h4",{attrs:{id:"cldeploy-explained"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cldeploy-explained","aria-hidden":"true"}},[e._v("#")]),e._v(" CLDeploy Explained")]),e._v(" "),a("p",[e._v("By its design, CloudLinux OS is very close to the upstream operating system, CentOS. This makes the conversion process relatively straightforward, requiring just one reboot. Here's what the cldeploy script does when you run it:")]),e._v(" "),a("ul",[a("li",[e._v("Backups the original repository settings into "),a("span",{staticClass:"notranslate"},[a("code",[e._v("/etc/cl-convert-saved")])]),e._v(".")]),e._v(" "),a("li",[e._v("Backups RHEL system ID into "),a("span",{staticClass:"notranslate"},[a("code",[e._v("/etc/cl-convert-saved")])]),e._v(" (RHEL systems only).")]),e._v(" "),a("li",[e._v("Installs CL repository settings & imports CL RPM key.")]),e._v(" "),a("li",[e._v("Replaces redhat/centos-release, redhat-release-notes, redhat-logos with CL version.")]),e._v(" "),a("li",[e._v("Removes cpuspeed RPM (as it conflicts with CPU limits).")]),e._v(" "),a("li",[e._v("Re-installs CL version of rhnlib/rhnplugin.")]),e._v(" "),a("li",[e._v("Checks for binary kernel modules, finds replacement if needed.")]),e._v(" "),a("li",[e._v("Detects OVH servers and fixes mkinitrd issues.")]),e._v(" "),a("li",[e._v("Detects Linode servers and fixes grub issues.")]),e._v(" "),a("li",[e._v("Checks if LES is installed.")]),e._v(" "),a("li",[e._v("Checks that "),a("span",{staticClass:"notranslate"},[a("code",[e._v("/etc/fstab")])]),e._v(" has correct "),a("span",{staticClass:"notranslate"},[a("code",[e._v("/dev/root")])])]),e._v(" "),a("li",[e._v("Checks for efi.")]),e._v(" "),a("li",[e._v("Installs CloudLinux Manager for cPanel, Plesk, DirectAdmin, and ISPManager"),a("sup",[e._v("*")])])]),e._v(" "),a("h4",{attrs:{id:"cldeploy-explained-reverting-back-to-centos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cldeploy-explained-reverting-back-to-centos","aria-hidden":"true"}},[e._v("#")]),e._v(" CLDeploy Explained - reverting back to CentOS:")]),e._v(" "),a("p",[e._v("Here's what the cldeploy script does, if one runs it to revert the system back to CentOS:")]),e._v(" "),a("ul",[a("li",[e._v("Restores CentOS repositories, and centos-release/release-notes/logos.")])]),e._v(" "),a("p",[e._v("Note that "),a("strong",[e._v("cldeploy doesn't remove the kernel")]),e._v(" to prevent condition when server has no kernels and wouldn't boot. Instead, we provie the instructions on how you could remove it manually later, when it is safe to do so.")]),e._v(" "),a("p",[e._v("On cPanel servers, rebuild of Apache with EasyApache will complete the conversion back, but doesn't have to be performed immediately."),a("sup",[e._v(" *")])]),e._v(" "),a("p",[e._v("On DirectAdmin servers, rebuild of Apache with custombuild will complete the conversion back, but doesn't have to be performed immediately.")]),e._v(" "),a("h2",{attrs:{id:"activation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activation","aria-hidden":"true"}},[e._v("#")]),e._v(" Activation")]),e._v(" "),a("h3",{attrs:{id:"getting-trial-license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-trial-license","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting trial license")]),e._v(" "),a("p",[e._v("You will need a trial activation key to be able to convert your CentOS server to CloudLinux OS Solo. The trial license subscription will work for 30 days.")]),e._v(" "),a("p",[e._v("To get the activation key:")]),e._v(" "),a("ol",[a("li",[e._v("Register with CloudLinux Network: "),a("a",{attrs:{href:"https://cln.cloudlinux.com/console/register/customer",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cln.cloudlinux.com/console/register/customer"),a("OutboundLink")],1),e._v(" (skip it if you already registered)")]),e._v(" "),a("li",[e._v("You will receive an email with activation link")]),e._v(" "),a("li",[e._v("Login at "),a("a",{attrs:{href:"https://cln.cloudlinux.com/console/auth/login",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cln.cloudlinux.com/console/auth/login"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Click on "),a("code",[e._v("Get Trial Activation Key")])])]),e._v(" "),a("p",[e._v("You will get a key that looks like: "),a("code",[e._v("12314-d34463a182fede4f4d7e140f1841bcf2")])]),e._v(" "),a("p",[e._v("Use it to register your system or to "),a("a",{attrs:{href:""}},[e._v("convert CentOS server to CloudLinux")]),e._v(" server.")]),e._v(" "),a("h3",{attrs:{id:"license-activation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license-activation","aria-hidden":"true"}},[e._v("#")]),e._v(" License activation")]),e._v(" "),a("p",[e._v("To register your server with CloudLinux Network using activation key run:")]),e._v(" "),a("div",{staticClass:"notranslate"},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ yum install rhn-setup --enablerepo=cloudlinux-base\n$ /usr/sbin/rhnreg_ks --activationkey=<activation key>\n")])])])]),e._v(" "),a("p",[e._v("Where activation key is like "),a("code",[e._v("1231-2b48feedf5b5a0e0609ae028d9275c93")])]),e._v(" "),a("p",[e._v("If you have IP based license, use "),a("span",{staticClass:"notranslate"},[a("code",[e._v("clnreg_ks")])]),e._v(" command:")]),e._v(" "),a("div",{staticClass:"notranslate"},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ yum install rhn-setup --enablerepo=cloudlinux-base\n$ /usr/sbin/clnreg_ks --force\n")])])])]),e._v(" "),a("h2",{attrs:{id:"installing-new-servers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-new-servers","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing new servers")]),e._v(" "),a("p",[e._v("You can download the latest CloudLinux ISO and use it to install CloudLinux on your server:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Latest stable CloudLinux 8 ISO")]),e._v(":")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.repo.cloudlinux.com/cloudlinux/8/iso/x86_64/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.repo.cloudlinux.com/cloudlinux/8/iso/x86_64/"),a("OutboundLink")],1),e._v(" - network/DVD installation ISOs")])])]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),a("p",[e._v("Once you install server from the ISO, make sure you "),a("RouterLink",{attrs:{to:"/cloudlinux_installation/#license-activation"}},[e._v("register your system")]),e._v(" and then run "),a("code",[e._v("yum update")]),e._v(".")],1)]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),a("p",[e._v("We recommend to reinstall the "),a("code",[e._v("cl-manager")]),e._v(" package after installing a control panel.")])]),a("p",[e._v("Mount and boot the image, then follow the steps.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Configure a network connection as shown below.")]),e._v(" "),a("ul",[a("li",[e._v("the network name depends on your operating system")]),e._v(" "),a("li",[e._v("you can specify your hostname")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/network_settings.png",alt:""}})])]),e._v(" "),a("li",[a("p",[e._v("Configure installation sources:")]),e._v(" "),a("ul",[a("li",[e._v("select the "),a("span",{staticClass:"notranslate"},[a("em",[e._v("On the network")])]),e._v(" installation source and enter the following repository URL: "),a("span",{staticClass:"notranslate"},[a("code",[e._v("https://repo.cloudlinux.com/cloudlinux/8/BaseOS/x86_64/os")])]),e._v(" for CloudLinux 8.")]),e._v(" "),a("li",[e._v("also, in case you'd like to get the latest packages from the "),a("strong",[e._v("Update")]),e._v(" repository, add the additional "),a("strong",[e._v("Update")]),e._v(" repository URL:\n"),a("span",{staticClass:"notranslate"},[a("code",[e._v("https://repo.cloudlinux.com/cloudlinux/8/AppStream/x86_64/os/")])]),e._v(" for CloudLinux 8.")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/repository_settings.png",alt:""}})])]),e._v(" "),a("li",[a("p",[e._v("Select software: select the "),a("span",{staticClass:"notranslate"},[a("em",[e._v("Minimal install")])]),e._v(" environment.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/software_selection.png",alt:""}})])])]),e._v(" "),a("h2",{attrs:{id:"net-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#net-install","aria-hidden":"true"}},[e._v("#")]),e._v(" Net install")]),e._v(" "),a("p",[e._v("To install CloudLinux over network:")]),e._v(" "),a("ol",[a("li",[e._v("Download & boot using the netboot image from:")])]),e._v(" "),a("p",[a("strong",[e._v("For CloudLinux 8")]),e._v(": "),a("a",{attrs:{href:"https://repo.cloudlinux.com/cloudlinux/8/iso/x86_64/CloudLinux-8.3-x86_64-boot.iso",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://repo.cloudlinux.com/cloudlinux/8/iso/x86_64/CloudLinux-8.3-x86_64-boot.iso"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Alternatively, you can configure your PXE server using following folder as reference: "),a("a",{attrs:{href:"https://repo.cloudlinux.com/cloudlinux/8/install/x86_64/os/images/pxeboot/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://repo.cloudlinux.com/cloudlinux/8/install/x86_64/os/images/pxeboot/"),a("OutboundLink")],1)]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("During the CloudLinux installation, select URL as installation source and enter URL:")])]),e._v(" "),a("p",[a("strong",[e._v("For CloudLinux 8")]),e._v(": "),a("a",{attrs:{href:"https://repo.cloudlinux.com/cloudlinux/8/install/x86_64/os/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://repo.cloudlinux.com/cloudlinux/8/install/x86_64/os/"),a("OutboundLink")],1),e._v(" and continue with installation.")]),e._v(" "),a("p",[e._v("Same URLs can be used to install para-virtualized Xen using either command-line or virt manager.")]),e._v(" "),a("h2",{attrs:{id:"provider-specific-guidelines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-specific-guidelines","aria-hidden":"true"}},[e._v("#")]),e._v(" Provider-specific guidelines")]),e._v(" "),a("h3",{attrs:{id:"aws"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aws","aria-hidden":"true"}},[e._v("#")]),e._v(" AWS")]),e._v(" "),a("p",[e._v("CloudLinux OS image list can be found "),a("a",{attrs:{href:"https://download.cloudlinux.com/cloudlinux/images/#aws-tab",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("If you are going to use Cloudlinux OS with cPanel image, you may find useful the following "),a("a",{attrs:{href:"https://cloudlinux.zendesk.com/hc/en-us/articles/360014130320-How-to-get-CloudLinux-OS-with-cPanel-AMI-working-on-AWS",target:"_blank",rel:"noopener noreferrer"}},[e._v("article"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"digitalocean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#digitalocean","aria-hidden":"true"}},[e._v("#")]),e._v(" DigitalOcean")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/cloudlinux_installation/#adding-cloudlinux-os-image-to-digitalocean"}},[e._v("Adding CloudLinux OS image to DigitalOcean")])],1)]),e._v(" "),a("p",[e._v("How to make CloudLinux work on DigitalOcean:")]),e._v(" "),a("p",[e._v("DigitalOcean doesn't support custom kernels. The droplet (VM) always runs DigitalOcean's kernel. CloudLinux requires its own kernel. To enable CloudLinux work on DigitalOcean droplets, we provide ability to boot into CloudLinux kernel using "),a("code",[e._v("kexec")]),e._v(" functionality.")]),e._v(" "),a("p",[e._v("How does this work:")]),e._v(" "),a("ul",[a("li",[a("span",{staticClass:"notranslate"},[e._v(" cldeploy ")]),e._v(" script checks for presence of "),a("span",{staticClass:"notranslate"},[a("code",[e._v("/etc/digitalocean")])]),e._v(". If the file detected, we assume that this is DigitalOcean droplet;")]),e._v(" "),a("li",[a("span",{staticClass:"notranslate"},[a("code",[e._v("kexec-tools")])]),e._v(" are installed;")]),e._v(" "),a("li",[a("span",{staticClass:"notranslate"},[a("code",[e._v("kexec")])]),e._v(" script will be created in "),a("span",{staticClass:"notranslate"},[a("code",[e._v("/etc/rc.d/init.d/")])]),e._v(" and set to run right after "),a("span",{staticClass:"notranslate"},[a("code",[e._v("rc.sysinit")])]),e._v(".")])]),e._v(" "),a("p",[e._v("When executed, script "),a("span",{staticClass:"notranslate"},[a("code",[e._v("/etc/rc.d/init.d/kexec")])]),e._v(" detects the latest installed CloudLinux kernel, and loads that kernel.")]),e._v(" "),a("p",[e._v("If the system cannot boot into CloudLinux kernel (due to any reason), subsequent reboot will skip "),a("span",{staticClass:"notranslate"},[a("code",[e._v("kexec")])]),e._v(", allow droplet to boot into DigitalOceans' kernel.")]),e._v(" "),a("p",[e._v("To disable booting into Cloudlinux kernel, run:")]),e._v(" "),a("div",{staticClass:"notranslate"},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("chkconfig --del kexec\n")])])])]),e._v(" "),a("p",[e._v("To re-enable booting into CloudLinux kernel, run:\n")]),a("div",{staticClass:"notranslate"},[a("p"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("chkconfig --add kexec\n")])])])]),e._v(" "),a("h4",{attrs:{id:"adding-cloudlinux-os-image-to-digitalocean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-cloudlinux-os-image-to-digitalocean","aria-hidden":"true"}},[e._v("#")]),e._v(" Adding CloudLinux OS image to DigitalOcean")]),e._v(" "),a("p",[e._v("Custom images are Linux distributions that have been modified to fit the specific needs of DigitalOcean users. You can find some basics of importing a custom CloudLinux OS image below.")]),e._v(" "),a("p",[e._v("Importing custom images to DigitalOcean is free, as you are only charged for the storage of your image. To save money, you can easily import your image, start a Droplet from your image, and delete the image, so you don’t incur any storage costs.")]),e._v(" "),a("p",[e._v("Below, we will describe how to add a qcow2 (QEMU/KVM) CloudLinux OS image as a custom image. You can find more information on image options at "),a("a",{attrs:{href:"https://www.digitalocean.com/docs/images/custom-images/overview/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.digitalocean.com/docs/images/custom-images/overview/"),a("OutboundLink")],1)]),e._v(" "),a("ol",[a("li",[e._v("To choose the right image, navigate to "),a("a",{attrs:{href:"https://download.cloudlinux.com/cloudlinux/images/#kvm-tab",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://download.cloudlinux.com/cloudlinux/images/#kvm-tab"),a("OutboundLink")],1),e._v(". Several different images are available for download (with and without a control panel).")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/cloudlinuximages.png",alt:""}})]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Copy the link for the image you are going to use and log into "),a("a",{attrs:{href:"https://blog.digitalocean.com/custom-images/cloud.digitalocean.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("cloud.digitalocean.com"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("Click "),a("span",{staticClass:"notranslate"},[a("em",[e._v("Images")])]),e._v(" on the left of the screen and then choose "),a("span",{staticClass:"notranslate"},[a("em",[e._v("Custom Images")])]),e._v(". Click the "),a("span",{staticClass:"notranslate"},[a("em",[e._v("Import via URL")])]),e._v(" button and paste the CloudLinux OS image link.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/customimages.png",alt:""}})]),e._v(" "),a("p",[e._v("There are several options here, but the most important is "),a("span",{staticClass:"notranslate"},[a("em",[e._v("Choose a datacenter region")])]),e._v(", i.e. which datacenter region your Droplets should be created in for this image.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/uploadimage.png",alt:""}})]),e._v(" "),a("p",[e._v("Click the "),a("span",{staticClass:"notranslate"},[a("em",[e._v("Upload Image")])]),e._v(" button and wait until the image is successfully uploaded.")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Add your public key to access your droplets using key-based authentication: navigate to the "),a("span",{staticClass:"notranslate"},[a("em",[e._v("Security")])]),e._v(" sidebar menu and click the "),a("span",{staticClass:"notranslate"},[a("em",[e._v("Add SSH Key")])]),e._v(" button.")])]),e._v(" "),a("p",[e._v("You can find more information about creating/adding SSH keys in "),a("a",{attrs:{href:"https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this article"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/addsshkey.png",alt:""}})]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[e._v("You will then be able to start a CloudLinux OS Droplet using the image.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),a("p",[e._v("Your Droplet will be created in the same datacenter that your custom image resides in.")])])])]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/startdroplet.png",alt:""}})]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Now, use your preferred SSH client software to connect to your Droplet. You can find more information on SSH client setup "),a("a",{attrs:{href:"https://www.digitalocean.com/docs/droplets/how-to/connect-with-ssh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/sshclient.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"uninstalling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uninstalling","aria-hidden":"true"}},[e._v("#")]),e._v(" Uninstalling")]),e._v(" "),a("p",[e._v("You can always uninstall CloudLinux OS. In this case, the system will be converted back to CentOS (even if the original system was RHEL)")]),e._v(" "),a("p",[e._v("The following actions will be taken:")]),e._v(" "),a("ol",[a("li",[e._v("CloudLinux repositories & "),a("span",{staticClass:"notranslate"},[e._v("yum")]),e._v(" plugin will be removed.")]),e._v(" "),a("li",[e._v("CentOS repositories will be set up.")])]),e._v(" "),a("p",[e._v("In the end, the script will provide instructions on how to finish the conversion back to CentOS.")]),e._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),a("p",[e._v("Do not forget to free up a CloudLinux OS license by removing the server from the "),a("a",{attrs:{href:"https://docs.cln.cloudlinux.com/dashboard/#servers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Servers section of your CLN account"),a("OutboundLink")],1),e._v(". After that, if you don't intend to use the license anymore, you can "),a("a",{attrs:{href:"https://docs.cln.cloudlinux.com/dashboard/#cloudlinux-os-activation-keys",target:"_blank",rel:"noopener noreferrer"}},[e._v("remove it"),a("OutboundLink")],1),e._v(" to avoid being billed for it.")])]),a("p",[e._v("To uninstall CloudLinux OS, run:")]),e._v(" "),a("div",{staticClass:"notranslate"},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ wget -O cldeploy https://repo.cloudlinux.com/cloudlinux/sources/cln/cldeploy\n$ sh cldeploy -c\n")])])])]),e._v(" "),a("p",[e._v("Now you have your system converted back to CentOS.")])])},[],!1,null,null,null);t.default=o.exports}}]);