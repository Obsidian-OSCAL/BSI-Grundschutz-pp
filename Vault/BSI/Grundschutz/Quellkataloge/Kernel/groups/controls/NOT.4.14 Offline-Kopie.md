---
tags: not414-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: NOT.4.14 Offline-Kopie
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# NOT.4.14 - Offline-Kopie
Gruppe: [NOT.4 Datensicherung](BSI/Grundschutz/Quellkataloge/Kernel/groups/NOT.4%20Datensicherung.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Notfallplanung (NOT)](BSI/Grundschutz/Quellkataloge/Kernel/groups/NOT%20Notfallplanung.md)**<br> ***  &rarr; [Datensicherung](BSI/Grundschutz/Quellkataloge/Kernel/groups/NOT.4%20Datensicherung.md) *** | Daten | SOLLTE | eine Offline-Kopie | {{regelmäßig}} | ausführen | Datensicherungskonzept | >Notfallplanung für Daten SOLLTE eine Offline-Kopie {{ insert: param, not.4.14-prm1 }} ausführen.

> [!info]- Guidance
>Eine Offline-Kopie ist eine Datensicherung, die physisch oder logisch von produktiven Systemen und dem laufenden Netzwerk getrennt ist („offline backup“ oder „air-gapped backup“). „Regelmäßig“ bedeutet, dass die Institution in Abhängigkeit von Verfügbarkeit und Kritikalität ihrer Daten feste Intervalle definiert, beispielsweise täglich, wöchentlich oder monatlich. Der Sinn und Zweck dieser Vorgabe liegt darin, sicherzustellen, dass im Falle von Schadsoftwarebefall oder gezielten Angriffen keine gleichzeitige Kompromittierung aller Sicherungskopien stattfinden kann; ein Angriff könnte sonst auch Backups verschlüsseln oder löschen. Eine Offline-Kopie kann dagegen die Wiederherstellung kritischer Systeme nach einem Ransomware-Angriff oder auch nach einem physischen Ausfall, etwa durch Stromschaden oder Brand, unterstützen. Eine Institution kann dies umsetzen, indem sie (1) Backups auf wechselbare Medien wie externe Festplatten, RDX-Kassetten oder Bänder erstellt, die nach dem Backup-Vorgang vom Netzwerk getrennt und sicher aufbewahrt werden, (2) Cloud-Backups so konfiguriert, dass sie durch Write-Once-Read-Many-(WORM)-Speicher geschützt und logisch von aktiven Systemen isoliert sind, oder (3) eine Rotation von Datenträgern einführt, bei der Kopien an einem separaten, physischen Standort verwahrt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 3772a701-e5d0-4aee-a393-ad539482eb72 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 3772a701-e5d0-4aee-a393-ad539482eb72 |
