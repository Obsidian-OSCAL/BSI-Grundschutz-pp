---
tags: Lateral_Movement_Separation_of_Concerns
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.2.1 Netzsegmente
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.2.1 - Netzsegmente
Tags: "[Lateral Movement](tags_Lateral Movement)" "[Separation of Concerns](tags_Separation of Concerns)"
Gruppe: [ARCH.2 Netzdesign](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.2%20Netzdesign.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Netzdesign](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.2%20Netzdesign.md) *** | Netze | SOLLTE | eine Unterteilung des internen Netzes in Netzsegmente | unter Berücksichtigung der Anforderungen der Institution und des Schutzbedarfes | verankern | Netzplan | >Architektur für Netze SOLLTE eine Unterteilung des internen Netzes in Netzsegmente unter Berücksichtigung der Anforderungen der Institution und des Schutzbedarfes verankern.

> [!info]- Guidance
>Die Aufteilung in Netzsegmente (auch Netzdomänen oder Subnetze genannt) ermöglicht es, verschiedene Zonen mit unterschiedlichen Schutzanforderungen – z. B. Büro-IT, Produktionsnetz, Managementnetz – getrennt zu betrachten und gezielt zu schützen. Relevant sind dabei (falls vorhanden) auch WLANs/SSIDs, IoT-Geräte wie vernetzte Kühlschränke, Hausleittechnik, operative Technologien, Industrielle Steuerungssysteme oder Netze zum Zugriff auf Speichersysteme (Storage Area Network, SAN). Die Anforderung gilt auch, wenn die Systeme nur noch als VMs oder Container existieren. Die Segmentierung kann hier in die virtuelle Netzwerk‑Ebene verlagert werden, sodass die Segmentierung weder vom Hypervisor noch von den Workloads umgangen wird. Die Einteilung in Segmente kann anhand einer Klassifizierung von Netzen erfolgen (z.B. nach Schutzbedarf der dort verarbeiteten Daten oder nach Risikoklassen angeschlossener Systeme) erfolgen. Beispiele hierfür sind Internet-Domäne, Endgeräte-Domäne, Domäne für zentrale Serverdienste, Domäne für Systeme hoher Vertraulichkeit. Alternativ können auch organisatorische Domänen verwendet werden, z. B. Personalwesen, Marketing, Finanzverwaltung, Innere Verwaltung. Die Filterkriterien können sich nach den Sicherheitsanforderungen der jeweiligen Netze im Einzelnen oder nach einer vorgenommenen Klassifikation der Netze richten. Hierzu gehören insbesondere die Anforderungen zur Authentifizierung und Autorisierung von Assets.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | ec31da4c-f5bd-43f5-b94f-f0fb7a5e1a18 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | ec31da4c-f5bd-43f5-b94f-f0fb7a5e1a18 |
