---
tags: Lateral_Movement
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.2.2.6 Demilitarisierte Zone
parent_control: ARCH.2.2 Einschränkung von Verbindungen zwischen Segmenten
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.2.2.6 - Demilitarisierte Zone
Tags: "[Lateral Movement](tags_Lateral Movement)"
Gruppe: [ARCH.2 Netzdesign](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.2%20Netzdesign.md)
---

** Übergeordnetes Control: ** [ARCH.2.2 Einschränkung von Verbindungen zwischen Segmenten](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.2.2%20Einschränkung%20von%20Verbindungen%20zwischen%20Segmenten.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Netzdesign](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.2%20Netzdesign.md) *** | Netze | SOLLTE | eine demilitarisierte Zone |  | installieren | Netzplan | >Architektur für Netze SOLLTE eine demilitarisierte Zone installieren.

> [!info]- Guidance
>Unter einer Demilitarisierten Zone versteht man in diesem Kontext ein logisch oder physisch getrenntes Teilnetz, in dem Systeme mit exponierten Diensten – wie Webserver, Mail-Gateways oder VPN-Endpunkte – betrieben werden. Systeme der Institution, die sowohl aus dem öffentlichen Netz als auch aus dem internen Netz erreichbar sind, werden in einer demilitarisierten Zone (DMZ) so betrieben, dass (1) der Netzverkehr zwischen dem System und dem öffentlichen Netz gefiltert wird und (2) der Netzverkehr zwischen dem System und anderen internen Netzen gefiltert wird. Eine DMZ kann sowohl durch dedizierte Hardware-Firewalls als auch durch virtuelle Netzwerksegmente umgesetzt werden. Ohne eine solche Trennung könnte ein kompromittierter Webserver direkt als Sprungbrett ins interne Netz dienen oder Schadsoftware könnte sich ungehindert auf sensible Systeme ausbreiten. Mit einer DMZ kann eine Institution hingegen erreichen, dass kompromittierte Systeme isoliert bleiben und sicherheitskritische interne Netze weiterhin geschützt sind.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | f9e8c80d-0043-42ac-a71b-73ff1e6cad50 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | f9e8c80d-0043-42ac-a71b-73ff1e6cad50 |
