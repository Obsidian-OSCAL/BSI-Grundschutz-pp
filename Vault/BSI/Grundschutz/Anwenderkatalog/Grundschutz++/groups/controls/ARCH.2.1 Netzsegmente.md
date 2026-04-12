---
tags:
- lateral_movement_separation_of_concerns
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.2.1 Netzsegmente
stmt_target_object_category: Netze
stmt_modal_verb: SOLLTE
stmt_action_word: verankern
stmt_documentation: Netzplan
control_effort_level: '2'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.2.1 - Netzsegmente
> [!example]- Tags:> [[tags_Lateral Movement|Lateral Movement]]> [[tags_Separation of Concerns|Separation of Concerns]]
Gruppe: [ARCH.2 Netzdesign](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.2%20Netzdesign.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)*<br> *  &rarr; [Netzdesign](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.2%20Netzdesign.md) *</div> | [Architektur](practices_Architektur_6710c63e-bb40-4742-9bae-1779ba21f2a9) | [Netze](target_object_categories_Netze_1a4fb57d-1648-4111-979d-6a5f4f848620) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | eine Unterteilung des internen Netzes in Netzsegmente | unter Berücksichtigung der Anforderungen der Institution und des Schutzbedarfes | [verankern](action_words_verankern_f8ba5e7f-9eac-4f04-8638-586bdcdc64f4) | [Netzplan](documentation_guidelines_Netzplan) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Architektur für Netze SOLLTE eine Unterteilung des internen Netzes in Netzsegmente unter Berücksichtigung der Anforderungen der Institution und des Schutzbedarfes verankern.</span>

> [!info]- Guidance
>Die Aufteilung in Netzsegmente (auch Netzdomänen oder Subnetze genannt) ermöglicht es, verschiedene Zonen mit unterschiedlichen Schutzanforderungen – z. B. Büro-IT, Produktionsnetz, Managementnetz – getrennt zu betrachten und gezielt zu schützen. Relevant sind dabei (falls vorhanden) auch WLANs/SSIDs, IoT-Geräte wie vernetzte Kühlschränke, Hausleittechnik, operative Technologien, Industrielle Steuerungssysteme oder Netze zum Zugriff auf Speichersysteme (Storage Area Network, SAN). Die Anforderung gilt auch, wenn die Systeme nur noch als VMs oder Container existieren. Die Segmentierung kann hier in die virtuelle Netzwerk‑Ebene verlagert werden, sodass die Segmentierung weder vom Hypervisor noch von den Workloads umgangen wird. Die Einteilung in Segmente kann anhand einer Klassifizierung von Netzen erfolgen (z.B. nach Schutzbedarf der dort verarbeiteten Daten oder nach Risikoklassen angeschlossener Systeme) erfolgen. Beispiele hierfür sind Internet-Domäne, Endgeräte-Domäne, Domäne für zentrale Serverdienste, Domäne für Systeme hoher Vertraulichkeit. Alternativ können auch organisatorische Domänen verwendet werden, z. B. Personalwesen, Marketing, Finanzverwaltung, Innere Verwaltung. Die Filterkriterien können sich nach den Sicherheitsanforderungen der jeweiligen Netze im Einzelnen oder nach einer vorgenommenen Klassifikation der Netze richten. Hierzu gehören insbesondere die Anforderungen zur Authentifizierung und Autorisierung von Assets.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | ec31da4c-f5bd-43f5-b94f-f0fb7a5e1a18 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | ec31da4c-f5bd-43f5-b94f-f0fb7a5e1a18 |
