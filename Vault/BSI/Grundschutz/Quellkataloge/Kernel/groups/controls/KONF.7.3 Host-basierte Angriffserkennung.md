---
tags: Produktbeschreibung_Lateral_Movement
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.7.3 Host-basierte Angriffserkennung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.7.3 - Host-basierte Angriffserkennung
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)" "[Lateral Movement](tags_Lateral Movement)"
Gruppe: [KONF.7 Schutz vor Schadcode](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.7%20Schutz%20vor%20Schadcode.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Schutz vor Schadcode](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.7%20Schutz%20vor%20Schadcode.md) *** | IT-Systeme | SOLLTE | Host-basierte Angriffserkennung |  | aktivieren | Konfigurationshistorie | >Konfiguration für IT-Systeme SOLLTE Host-basierte Angriffserkennung aktivieren.

> [!info]- Guidance
>Host-basierte Angriffserkennung, im Englischen auch als Host-based Intrusion Detection (HID) oder Host-based Intrusion Prevention (HIP) bezeichnet, bezieht sich auf Mechanismen, die auf den einzelnen IT-Systemen, wie Servern oder Workstations, selbst operieren, um böswillige Aktivitäten zu erkennen und zu verhindern. Im Gegensatz zu netzwerkbasierten Systemen, die den Datenverkehr überwachen, fokussiert sich die Host-basierte Erkennung auf interne Systemereignisse, wie die Integrität von Dateisystemen, Änderungen an kritischen Konfigurationsdateien, oder die Erkennung von unbekannten Prozessen. Der Hauptzweck dieser Anforderung besteht darin, eine zusätzliche Sicherheitsebene zu schaffen, die direkt am Endpunkt (Host) agiert, was die Erkennung von Angriffen ermöglicht, die bereits die äußeren Schutzmechanismen überwunden haben könnten, beispielsweise wenn ein Angreifer eine bekannte Schwachstelle ausnutzt, um einen Prozess mit erhöhten Rechten auszuführen. Diese Maßnahmen können dabei helfen, interne Lateralbewegungen eines Angreifers zu erkennen und somit die Ausbreitung eines Vorfalls zu verlangsamen oder zu stoppen, bevor es zu einem größeren Schaden kommt.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | c6ea1218-1fc7-472f-96e5-df42b2acafa9 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | c6ea1218-1fc7-472f-96e5-df42b2acafa9 |

> [!info]- Links> > related: [DET.4.2 Automatische Angriffserkennung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.4.2%20Automatische%20Angriffserkennung.md)
