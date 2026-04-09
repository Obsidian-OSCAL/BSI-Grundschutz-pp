---
tags: Command__Control_Lateral_Movement_Data_Exfiltration
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.4.11 Anomalien in Netzen und am Perimeter
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.4.11 - Anomalien in Netzen und am Perimeter
Tags: "[Command & Control](tags_Command & Control)" "[Lateral Movement](tags_Lateral Movement)" "[Data Exfiltration](tags_Data Exfiltration)"
Gruppe: [DET.4 Überwachung von Aktivitäten](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.4%20Überwachung%20von%20Aktivitäten.md)
---

> [!info]- Untergeordnete Controls
> [DET.4.11.1 Authentifizierungsversuche an externen Schnittstellen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.4.11.1%20Authentifizierungsversuche%20an%20externen%20Schnittstellen.md)> [DET.4.11.2 Netzwerk-Honeypots](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.4.11.2%20Netzwerk-Honeypots.md)> [DET.4.11.3 Netzverkehrsfluss](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.4.11.3%20Netzverkehrsfluss.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)**<br> ***  &rarr; [Überwachung von Aktivitäten](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.4%20Überwachung%20von%20Aktivitäten.md) *** | Netze | SOLLTE | den Netzwerkverkehr auf Anomalien |  | überwachen | Detektions-Konzept | >Detektion für Netze SOLLTE den Netzwerkverkehr auf Anomalien überwachen.

> [!info]- Guidance
>Beispiele sind ausgehende Netzverbindungen zu als bösartig bekannten oder gänzlich unbekannten DNS-Domains oder IP-Adressen, Anzeichen für DNS-Tunneling (ungewöhnlich lange Subdomains oder Spitzenwerte für TXT-Mengen), ungewöhnlich hohes Datenvolumen zu Cloud-Speicherlösungen, sowie unautorisierte Portscans oder Brute Force Angriffe auf Fernwartungsschnittstellen wie RDP oder SSH sein. Hierdurch können Verbindungen zu Angreiferservern (C2 Beacons), die Ausbreitung von Angriffen über das Netz, oder Datenabflüsse erkannt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | e6cf2c48-c49f-4c10-9cca-252d903b0979 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | e6cf2c48-c49f-4c10-9cca-252d903b0979 |
