# Using Ephemeral Containers in Devtron

## Introduction

Ephemeral container is a special type of container that runs temporarily in an existing Pod to accomplish user-initiated actions such as troubleshooting. It is especially useful when `kubectl exec` is insufficient because a container has crashed or a container image doesn't include debugging utilities.

For instance, ephemeral containers help you execute a `curl` request from within pods that typically lack this utility.

:::info
Ephemeral containers are turned on by default in Kubernetes v1.23 and later
:::

<hr />

## How to Launch an Ephemeral Container

Wherever you can access pod resources in Devtron, you can launch an ephemeral container as shown below.

### From Devtron (App Details)

<iframe width="100%" height="400" src="https://www.youtube.com/embed/TnaHRugYvSI" title="Launching Ephemeral Container from App Details" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

1. In the left sidebar, go to **Applications**.
2. Search and click your application from the list of Devtron Apps.
3. Go to the **App Details** tab.
4. Under the **K8 Resources** tab, select **Pod** inside `Workloads`.
5. Locate the pod you wish to debug. Hover and choose click **Terminal**.

    ![Figure 1: Opening a Terminal](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/debugging-deployment-and-monitoring/terminal.jpg)

6. Click **Launch Ephemeral Container** as shown below.

    ![Figure 2: Launching an Ephemeral Container](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/debugging-deployment-and-monitoring/launch-ec-new.jpg)

7. You get 2 tabs:
    1. **Basic** - It provides the bare minimum configurations required to launch an ephemeral container.

    ![Figure 3: Basic View](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/debugging-deployment-and-monitoring/basic.jpg)

    It contains 3 mandatory fields:

    * **Container name prefix** - Type a prefix to give to your ephemeral container, for e.g., *debug*. Your container name would look like `debug-jndvs`.

    * **Image** - Choose an image to run from the dropdown. Ephemeral containers need an image to run and provide the capability to debug, such as `curl`. You can use a custom image too.

    * **Target Container name** - Since a pod can have one or more containers, choose a target container you wish to debug, from the dropdown.

    2. **Advanced** - It is particularly useful for advanced users that wish to use labels or annotations since it provides additional key-value options. Refer [Ephemeral Container Spec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#ephemeralcontainer-v1-core) to view the supported options.

    ![Figure 4: Advanced View](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/debugging-deployment-and-monitoring/advanced.jpg)

:::info
    Devtron ignores the `command` field while launching an ephemeral container
:::

8. Click **Launch Container**.

### From Devtron (Resource Browser)

Click [here](../resource-browser/pods#launching-ephemeral-container) to know more.

### From Devtron's Cluster Terminal

(*This is not a recommended method. This option is available only if you are an admin.*)

<iframe width="100%" height="400" src="https://www.youtube.com/embed/PzB6dFRYe38" title="Externally Created Ephemeral Container" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can launch an ephemeral container from Kubernetes CLI. For this, you need access to the cluster terminal on Devtron.

<hr />

## Removing an Ephemeral Container

<iframe width="100%" height="400" src="https://www.youtube.com/embed/tZID0YU0YUU" title="Deleting Ephemeral Containers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can remove an ephemeral container using either **App Details** or **Resource Browser** (from the same screen you used to create the ephemeral container).

:::info
You cannot use **App Details** or **Resource Browser** to remove an ephemeral container created using Kubernetes CLI
:::

![Figure 5: Removing Ephemeral Container from App Details](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/debugging-deployment-and-monitoring/delete-ec.jpg)





