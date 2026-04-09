---
tags: Zero_Trust_Advanced_Persistent_Threats_APT_Lateral_Movement
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.2.3 Mikrosegmentierung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.2.3 - Mikrosegmentierung
Tags: "[Zero Trust](tags_Zero Trust)" "[Advanced Persistent Threats (APT)](tags_Advanced Persistent Threats (APT))" "[Lateral Movement](tags_Lateral Movement)"
Gruppe: [ARCH.2 Netzdesign](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.2%20Netzdesign.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Netzdesign](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.2%20Netzdesign.md) *** | IT-Systeme | KANN | Verbindungen zu allen anderen IT-Systemen |  | einschränken | Netzplan | >Architektur für IT-Systeme KANN Verbindungen zu allen anderen IT-Systemen einschränken.

> [!info]- Guidance
>Mikrosegmentierung ist die Unterteilung des Netzes in möglichst kleine Segmente (z.B. pro IT-System oder Server-Anwendung). Für jedes dieser Segmente wird die erlaubte Kommunikation definiert und gefiltert. Mikrosegmentierung sorgt dafür, dass z.B. zwei medizinische Geräte mit gleicher Rolle zwar ins gleiche VLAN dürfen, aber nicht direkt miteinander kommunizieren dürfen. Die Umsetzung kann mit dynamischen VLANs, softwaredefinierten Netzwerken (SDN) oder Netzwerk-Firewalls auf Host-Ebene erfolgen. Die Mikrosegmentierung begrenzt Angriffe, die sich lateral ausbreiten.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 193a28ca-0382-4998-874d-4c08b6326f26 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 193a28ca-0382-4998-874d-4c08b6326f26 |
