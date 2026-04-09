---
tags:
- Lateral_Movement
- det4113-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.4.11.3 Netzverkehrsfluss
parent_control: DET.4.11 Anomalien in Netzen und am Perimeter
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.4.11.3 - Netzverkehrsfluss
Tags: "[Lateral Movement](tags_Lateral Movement)"
Gruppe: [DET.4 Überwachung von Aktivitäten](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.4%20Überwachung%20von%20Aktivitäten.md)
---

** Übergeordnetes Control: ** [DET.4.11 Anomalien in Netzen und am Perimeter](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.4.11%20Anomalien%20in%20Netzen%20und%20am%20Perimeter.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)**<br> ***  &rarr; [Überwachung von Aktivitäten](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.4%20Überwachung%20von%20Aktivitäten.md) *** | Netze | KANN | auf kritische Netzverkehrsflüsse | anhand von {{Kriterien}} | überwachen | Audit Log | >Detektion für Netze KANN auf kritische Netzverkehrsflüsse anhand von {{ insert: param, det.4.11.3-prm1 }} überwachen.

> [!info]- Guidance
>Ein Netzverkehrsfluss ist eine Aufzeichnung von Verkehrsdaten einer Netzwerkverbindung (wie Quell-/Ziel-IP, Ports, Protokoll, übertragene Datenmenge und Zeitdauer). Die Aufzeichnung des gesamten Verkehrs (Packet Capture) des vollständigen Inhalts aller Datenpakete ist hierzu nicht erforderlich, sodass die zu untersuchende Datenmenge überschaubar bleibt. Allerdings sind hier Compliance-Anforderungen zur Datenspeicherung relevant. Für datenschutzrechtliche Fragen zu Verkehrsdaten kann der BfDI Leitfaden Speicherung Verkehrsdaten als Grundlage genutzt werden. Beispiele für Kriterien sind die Aufzeichnung an wichtigen Netzgrenzen (DMS-Internet), in kritischen Netzen, zwischen Serversystemen oder bei Leistungsproblemen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 80109af2-9ed7-4aca-807e-aae712dc8e18 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 80109af2-9ed7-4aca-807e-aae712dc8e18 |
