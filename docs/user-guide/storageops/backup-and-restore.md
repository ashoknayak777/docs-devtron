# Backup & Restore
## Introduction
The **Backup & Restore** feature in Devtron helps you protect your Kubernetes workloads and data by allowing you to back up and restore **clusters**, **namespaces**, or specific resources directly from the Devtron UI. You can create on-demand or scheduled backups, choose where your data is stored (such as AWS S3, Azure Blob, or GCP Storage), and restore it to the same or another cluster when needed. Whether you are preparing for disaster recovery, migrating environments, or ensuring business continuity, Devtron makes the process simple, reliable, and transparent while giving you complete visibility and control.

## Creating Backup

You can create a backup in Devtron to capture the current state of your Kubernetes clusters, namespaces, and resources.

1. Go to **Data Protection Management** → **Backup & Schedule**. 

2. Select **Create Backup** and select one of the following:

    | **Option** | **Description** |
    |-------------|-----------------|
    | **From Scratch** | Configure a new backup manually by defining the scope, storage, and snapshot settings |
    | **From Schedule** | Trigger a backup using an existing backup schedule configuration |
    | **Create Backup Schedule** | Create a recurring backup policy to automatically perform backups at regular intervals |

    ### From Scratch

    After selecting **From Scratch**, a new modal window will open, enter the required details for each section

    #### 1. Basic Details

    | **Field** | **Required / Optional** | **Description** |
    |------------|-------------------------|-----------------|
    | **Backup Name** | Required | Enter a unique name for the backup to identify it in the list view. |
    | **Labels** | Optional | Add key-value pairs to organize and filter backups by environment, team, or purpose. |

    #### 2. Backup Scope & Policy

    | **Field** | **Required / Optional** | **Description** |
    |------------|-------------------------|-----------------|
    | **Select Cluster to Backup** | Required | Choose the Kubernetes cluster where the backup will be performed. |
    | **Namespaces to Backup** | Required | Define which namespaces to include in the backup <ul><li>**All Namespaces** – Backs up all the namespaces in the cluster</li><li> **All Production Environments** - Backs up namespaces tagged as production</li><li> **All Non-Production Environments** - Backs up namespaces tagged as npn-production </li><li>**Specific Namespaces** - Select specific namespaces manually</li></ul> |
    | **Resources to Backup** | Optional | Choose which Kubernetes resources to include<br /> <ul><li>**All Resources** – Includes all resources</li><li> **Specific Resources** – Select **Global**, **Cluster**, or **Namespace** scoped resources</li></ul> |
    | **Included Resources** | Optional | Specify resource kinds to include, such as `deployments` or `configmaps`. |
    | **Excluded Resources** | Optional | Specify resource kinds to exclude, such as `secrets` or `events`. |

    #### 3. Storage & Snapshot Location

    | **Field** | **Required / Optional** | **Description** |
    |------------|-------------------------|-----------------|
    | **Volume Snapshot Location** | Required | Select where the volume snapshots will be stored. Each cloud provider supports one snapshot location per backup. |
    | **Storage Location** | Required | Choose the object storage target (for example, **AWS S3**, **Azure Blob**, **GCP Storage**) to store backup data and logs. |
    | **Snapshot Option** | Required | Choose how to handle volume data <ul><li> **Take Snapshot** – Capture persistent volume data</li> <li>**Skip Volume Snapshot** – Back up only resource manifests</li></ul> |

    #### Snapshot Volume Settings (When *Take Snapshot* is selected)

    | **Field** | **Required / Optional** | **Description** |
    |------------|-------------------------|-----------------|
    | **Snapshot Move Data** | Optional | Specify whether snapshot data should be moved after creation. |
    | **Default Volumes to FS Backup** | Optional | Use file system backup for all volumes instead of block-level snapshots. |
    | **Data Mover** | Optional | Select the data mover for transferring snapshot data (for example, `velero` or `kopia`). |
    | **Parallel Files Upload** | Optional | Define the number of files uploaded in parallel. Applicable when using the **kopia** uploader. |

    #### 4. Advanced Timeouts & Tuning

    | **Field** | **Required / Optional** | **Description** |
    |------------|-------------------------|-----------------|
    | **CSI Snapshot Timeout** | Optional | Set the maximum time to wait for CSI snapshot creation before timing out (for example, `10m`). |
    | **Item Operation Timeout** | Optional | Define how long to wait for asynchronous plugin operations. Default is `72h`. |

3. After entering the required details, click **Create Backup** and a backup will be created.

### From Schedule



